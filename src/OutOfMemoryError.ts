import { ErrorOptions, OutOfMemoryErrorMessageProps, OutOfMemoryErrorProps } from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractOutOfMemoryError extends AbstractError {
    public constructor(props: OutOfMemoryErrorProps, options: ErrorOptions<OutOfMemoryErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when there is not enough memory to continue the execution of a program.
 */
export class OutOfMemoryError extends AbstractOutOfMemoryError {
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
