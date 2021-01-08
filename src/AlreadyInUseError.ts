import { AlreadyInUseErrorMessageProps, AlreadyInUseErrorProps, ErrorOptions } from './CommonTypes';
import { _Error } from './NativeErrorsPro';

export class _AlreadyInUseError extends _Error {
    protected _entityName: string;

    public constructor(
        props: AlreadyInUseErrorProps,
        options: ErrorOptions<AlreadyInUseErrorMessageProps>,
    ) {
        const { entityName, inUse } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, entityName, inUse })),
            ...others,
        });

        this._entityName = entityName;
        this._setNonEnumerable('_entityName');
    }

    public get entityName() {
        return this._entityName;
    }
}

/**
 * Applicable when a resource is already in use, for example unique key constraints like a username.
 */
export class AlreadyInUseError extends _AlreadyInUseError {
    /**
     * @param entityName The entity that owns the protected resource.
     */
    public constructor(entityName: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     * @param arg2 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string, arg2: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     * @param arg2 A field or attribute that is already in use.
     * @param arg3 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string, arg2: string, arg3: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     * @param arg2 A field or attribute that is already in use.
     * @param arg3 A field or attribute that is already in use.
     * @param args Fields or attributes that are already in use.
     */
    public constructor(
        entityName: string,
        arg1: string,
        arg2: string,
        arg3: string,
        ...args: string[]
    );

    public constructor(
        entityName: string,
        arg1?: string,
        arg2?: string,
        arg3?: string,
        ...args: string[]
    ) {
        function generateMessage(props: AlreadyInUseErrorMessageProps) {
            return props.inUse.length === 0
                ? `The specified '${props.entityName}' value is already in use.`
                : `The specified '${props.entityName}' value is already in use:` +
                      `${props.inUse.join(', ')}`;
        }

        super(
            {
                message: '',
                entityName,
                inUse: [arg1, arg2, arg3, ...args].filter((e) => e !== undefined) as string[],
            },
            { generateMessage },
        );
    }
}
