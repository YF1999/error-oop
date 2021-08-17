import { IErrorArguments, IErrorOptions, NativeError } from '../Native';
import { ErrorTool } from '../Tools';

export interface IArgumentErrorOptions extends IErrorOptions {
    /**
     * Do not append message suffix at the end of original message.
     */
    noMessageSuffix?: boolean;
    /**
     * The name of the parameter that caused the current error.
     */
    paramName?: string;
}

/**
 * Applicable when one of the arguments provided to a function or method is not valid.
 */
export class ArgumentError extends NativeError {
    protected _paramName?: string;

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
     * @param paramName The name of the parameter that caused the current error.
     */
    public constructor(message: string, paramName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, paramName: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IArgumentErrorOptions);

    public constructor(...args: IErrorArguments<IArgumentErrorOptions, ['paramName']>) {
        const options = ErrorTool.parseErrorArguments(['paramName'], ...args);

        if (options.paramName && options.noMessageSuffix !== true) {
            options.message = `${options.message} (Parameter '${options.paramName}')`;
        }

        super(options);

        this._paramName = options.paramName;
        this._setNonEnumerable('_paramName');
    }

    public get paramName(): string | undefined {
        return this._paramName;
    }
}
