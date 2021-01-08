import {
    ErrorOptions,
    InvalidOperationErrorMessageProps,
    InvalidOperationErrorProps,
} from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractInvalidOperationError extends AbstractError {
    public constructor(
        props: InvalidOperationErrorProps,
        options: ErrorOptions<InvalidOperationErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when a function call or a method call is invalid for the object's current state.
 */
export class InvalidOperationError extends AbstractInvalidOperationError {
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
