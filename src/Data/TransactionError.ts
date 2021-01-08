import { ErrorOptions, TransactionErrorMessageProps, TransactionErrorProps } from '../CommonTypes';
import { _Error } from '../NativeErrors';

export class _TransactionError extends _Error {
    public constructor(
        props: TransactionErrorProps,
        options: ErrorOptions<TransactionErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when attempt to do work on a transaction that cannot accept new work.
 */
export class TransactionError extends _TransactionError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be
     * appended.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
