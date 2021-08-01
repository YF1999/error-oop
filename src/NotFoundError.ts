import { ErrorOptions, NotFoundErrorMessageProps, NotFoundErrorProps } from './CommonTypes';
import { AbstractError } from './Native';

export abstract class AbstractNotFoundError extends AbstractError {
    protected _entityName?: string;

    public constructor(props: NotFoundErrorProps, options: ErrorOptions<NotFoundErrorMessageProps>) {
        const { entityName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, entityName })),
            ...others,
        });

        this._entityName = entityName;
        this._setNonEnumerable('_entityName');
    }

    public get entityName(): string | undefined {
        return this._entityName;
    }
}

/**
 * Applicable when an attempt to retrieve data yielded no result.
 */
export class NotFoundError extends AbstractNotFoundError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param entityName The entity which is not found.
     */
    public constructor(message: string, entityName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param entityName The entity which is not found.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
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
