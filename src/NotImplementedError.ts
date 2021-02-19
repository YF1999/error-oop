import { ErrorOptions, NotImplementedErrorMessageProps, NotImplementedErrorProps } from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractNotImplementedError extends AbstractError {
    public constructor(props: NotImplementedErrorProps, options: ErrorOptions<NotImplementedErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when a requested method or operation is not implemented.
 */
export class NotImplementedError extends AbstractNotImplementedError {
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
