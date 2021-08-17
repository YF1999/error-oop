import { ErrorTool, IErrorArguments, IErrorOptions, NativeError } from './Native';

export interface IInvalidDataErrorOptions extends IErrorOptions {}

/**
 * Applicable when a data stream is in an invalid format.
 */
export class InvalidDataError extends NativeError {
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
     * @param options The constructor options.
     */
    public constructor(options: IInvalidDataErrorOptions);

    public constructor(...args: IErrorArguments<IInvalidDataErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
