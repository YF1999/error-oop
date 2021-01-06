import { AlreadyInUseErrorMessageProps, AlreadyInUseErrorProps, ErrorOptions } from './CommonTypes';
import { _Error } from './Error';

export class _AlreadyInUseError extends _Error {
    protected _entityName: string;
    protected _inUseFor: string[];

    public constructor(
        props: AlreadyInUseErrorProps,
        options: ErrorOptions<AlreadyInUseErrorMessageProps>,
    ) {
        const { entityName, inUseFor } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, entityName, inUseFor })),
            ...others,
        });

        this._entityName = entityName;
        this._inUseFor = inUseFor;
        this._setNonEnumerable('_entityName');
        this._setNonEnumerable('_inUseFor');
    }

    public get entityName() {
        return this._entityName;
    }
}

export class AlreadyInUseError extends _AlreadyInUseError {
    public constructor(entityName: string);
    public constructor(entityName: string, arg1: string);
    public constructor(entityName: string, arg1: string, arg2: string);
    public constructor(entityName: string, arg1: string, arg2: string, arg3: string);
    public constructor(entityName: string, args: string[]);

    public constructor(entityName: string, arg1?: string | string[], arg2?: string, arg3?: string) {
        function generateMessage(props: AlreadyInUseErrorMessageProps) {
            return props.inUseFor.length === 0
                ? `The specified '${props.entityName}' value is already in use.`
                : `The specified '${props.entityName}' value is already in use for:` +
                      `${props.inUseFor.join(', ')}`;
        }

        // entityName + args
        if (Array.isArray(arg1)) {
            super({ message: '', entityName, inUseFor: arg1 }, { generateMessage });
        }

        // entityName + arg1? + arg2? + arg3
        else {
            super(
                {
                    message: '',
                    entityName,
                    inUseFor: [arg1, arg2, arg3].filter((e) => e !== undefined) as string[],
                },
                { generateMessage },
            );
        }
    }
}
