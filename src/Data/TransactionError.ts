import { ErrorTool, IErrorArguments, IErrorOptions, NativeError } from '../Native';

export interface ITransactionErrorOptions extends IErrorOptions {}

/**
 * Applicable when attempt to do work on a transaction that cannot accept new work.
 */
export class TransactionError extends NativeError {
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
    public constructor(options: ITransactionErrorOptions);

    public constructor(...args: IErrorArguments<ITransactionErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
