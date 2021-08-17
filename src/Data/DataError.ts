import { IErrorArguments, IErrorOptions, NativeError } from '../Native';
import { ErrorTool } from '../Tools';

export interface IDataErrorOptions extends IErrorOptions {}

/**
 * Applicable when an error occurs on or with an external data source.
 */
export class DataError extends NativeError {
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
    public constructor(options: IDataErrorOptions);

    public constructor(...args: IErrorArguments<IDataErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
