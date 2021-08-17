import { IErrorArguments, IErrorOptions, NativeError } from './Native';
import { ErrorTool } from './Tools';

export interface INotSupportedErrorOptions extends IErrorOptions {}

/**
 * Applicable when an invoked method is not supported, or when there is an attempt to read, seek, or write to a stream
 * that does not support the invoked functionality.
 */
export class NotSupportedError extends NativeError {
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
    public constructor(options: INotSupportedErrorOptions);

    public constructor(...args: IErrorArguments<INotSupportedErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
