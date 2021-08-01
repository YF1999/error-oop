import { ErrorOptions, StackOverflowErrorMessageProps, StackOverflowErrorProps } from './CommonTypes';
import { AbstractError } from './Native';

export abstract class AbstractStackOverflowError extends AbstractError {
    public constructor(props: StackOverflowErrorProps, options: ErrorOptions<StackOverflowErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when the execution stack overflows because it contains too many nested method calls.
 */
export class StackOverflowError extends AbstractStackOverflowError {
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
