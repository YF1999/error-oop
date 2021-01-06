import { ErrorOptions, NotFoundErrorMessageProps, NotFoundErrorProps } from './CommonTypes';
import { _Error } from './Error';

export class _NotFoundError extends _Error {
    protected _entityName?: string;

    public constructor(
        props: NotFoundErrorProps,
        options: ErrorOptions<NotFoundErrorMessageProps>,
    ) {
        const { entityName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, entityName })),
            ...others,
        });

        this._entityName = entityName;
        this._setNonEnumerable('_entityName');
    }

    public get entityName() {
        return this._entityName;
    }
}

export class NotFoundError extends _NotFoundError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, entityName: string);
    public constructor(message: string, entityName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, {});
        }

        // message + entityName + innerError?
        else {
            super({ message, entityName: arg1, innerError: arg2 }, {});
        }
    }
}
