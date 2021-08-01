import { IErrorOptions, IErrorArguments, NativeError, ErrorTool } from './Native';

export interface IIndexOutOfRangeErrorOptions extends IErrorOptions {}

/**
 * Applicable when an attempt is made to access an element of an array or collection with an index that is outside its
 * bounds.
 */
export class IndexOutOfRangeError extends NativeError {
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
    public constructor(options: IIndexOutOfRangeErrorOptions);

    public constructor(...args: IErrorArguments<IIndexOutOfRangeErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
