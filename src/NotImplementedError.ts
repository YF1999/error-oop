import { IErrorArguments, IErrorOptions, NativeError } from './Native';
import { InternalErrorTool } from './InternalTools';

export interface INotImplementedErrorOptions extends IErrorOptions {}

/**
 * Applicable when a requested method or operation is not implemented.
 */
export class NotImplementedError extends NativeError {
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
    public constructor(options: INotImplementedErrorOptions);

    public constructor(...args: IErrorArguments<INotImplementedErrorOptions>) {
        super(InternalErrorTool.parseErrorArguments([], ...args));
    }
}
