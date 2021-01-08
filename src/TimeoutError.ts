import { ErrorOptions, TimeoutErrorMessageProps, TimeoutErrorProps } from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractTimeoutError extends AbstractError {
    public constructor(props: TimeoutErrorProps, options: ErrorOptions<TimeoutErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when the time allotted for a process or operation has expired.
 */
export class TimeoutError extends AbstractTimeoutError {
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
