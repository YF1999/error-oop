import { IErrorArguments, IErrorOptions, NativeError } from './Native';
import { InternalErrorTool } from './InternalTools';

export interface INotPermittedErrorOptions extends IErrorOptions {}

/**
 * Applicable when an operation is not permitted.
 */
export class NotPermittedError extends NativeError {
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
    public constructor(options: INotPermittedErrorOptions);

    public constructor(...args: IErrorArguments<INotPermittedErrorOptions>) {
        super(InternalErrorTool.parseErrorArguments([], ...args));
    }
}
