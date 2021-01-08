import {
    ErrorOptions,
    StackOverflowErrorMessageProps,
    StackOverflowErrorProps,
} from './CommonTypes';
import { _Error } from './NativeErrors';

export class _StackOverflowError extends _Error {
    public constructor(
        props: StackOverflowErrorProps,
        options: ErrorOptions<StackOverflowErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when the execution stack overflows because it contains too many nested method calls.
 */
export class StackOverflowError extends _StackOverflowError {
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
