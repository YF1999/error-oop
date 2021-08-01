import { IErrorOptions, IErrorArguments, NativeError, ErrorTool } from './Native';

export interface IStackOverflowErrorOptions extends IErrorOptions {}

/**
 * Applicable when the execution stack overflows because it contains too many nested method calls.
 */
export class StackOverflowError extends NativeError {
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
    public constructor(options: IStackOverflowErrorOptions);

    public constructor(...args: IErrorArguments<IStackOverflowErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
