import { IErrorOptions, ErrorTool, NativeError, IErrorArguments } from './Native';

export interface INotFoundErrorOptions extends IErrorOptions {
    entityName?: string;
}

/**
 * Applicable when an attempt to retrieve data yielded no result.
 */
export class NotFoundError extends NativeError {
    protected _entityName?: string;

    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
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
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, entityName: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: INotFoundErrorOptions);

    public constructor(...args: IErrorArguments<INotFoundErrorOptions, ['entityName']>) {
        const options = ErrorTool.parseErrorArguments(['entityName'], ...args);

        super(options);

        this._entityName = options.entityName;
        this._setNonEnumerable('_entityName');
    }

    public get entityName(): string | undefined {
        return this._entityName;
    }
}
