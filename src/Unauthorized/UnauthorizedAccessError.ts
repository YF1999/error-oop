import { IErrorArguments, IErrorOptions, NativeError } from '../Native';
import { ErrorTool } from '../Tools';

export interface IUnauthorizedAccessErrorOptions extends IErrorOptions {}

/**
 * Applicable when the operating system denies access because of an I/O error or a specific type of security error.
 */
export class UnauthorizedAccessError extends NativeError {
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
    public constructor(options: IUnauthorizedAccessErrorOptions);

    public constructor(...args: IErrorArguments<IUnauthorizedAccessErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
