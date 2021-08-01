import { IErrorOptions, IErrorArguments, NativeError, ErrorTool } from './Native';

export interface IOutOfMemoryErrorOptions extends IErrorOptions {}

/**
 * Applicable when there is not enough memory to continue the execution of a program.
 */
export class OutOfMemoryError extends NativeError {
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
    public constructor(options: IOutOfMemoryErrorOptions);

    public constructor(...args: IErrorArguments<IOutOfMemoryErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
