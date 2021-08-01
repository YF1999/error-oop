import { IErrorOptions, IStandardArguments, NativeError } from './Native';
import { ErrorTool } from './Tools';

export interface IInvalidOperationErrorOptions extends IErrorOptions {}

/**
 * Applicable when a function call or a method call is invalid for the object's current state.
 */
export class InvalidOperationError extends NativeError {
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
    public constructor(options: IInvalidOperationErrorOptions);

    public constructor(...args: IStandardArguments<IInvalidOperationErrorOptions>) {
        super(ErrorTool.parseStandardArguments(...args));
    }
}
