import { IErrorArguments, IErrorOptions, NativeError } from './Native';
import { ErrorTool } from './Tools';

export interface ITimeoutErrorOptions extends IErrorOptions {}

/**
 * Applicable when the time allotted for a process or operation has expired.
 */
export class TimeoutError extends NativeError {
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
    public constructor(options: ITimeoutErrorOptions);

    public constructor(...args: IErrorArguments<ITimeoutErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
