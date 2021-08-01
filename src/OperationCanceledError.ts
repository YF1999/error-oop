import { ErrorOptions, OperationCanceledErrorMessageProps, OperationCanceledErrorProps } from './CommonTypes';
import { AbstractError } from './Native';

export abstract class AbstractOperationCanceledError extends AbstractError {
    public constructor(props: OperationCanceledErrorProps, options: ErrorOptions<OperationCanceledErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when an operation was canceled.
 */
export class OperationCanceledError extends AbstractOperationCanceledError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
