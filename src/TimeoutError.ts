import { ErrorOptions, TimeoutErrorMessageProps, TimeoutErrorProps } from './CommonTypes';
import { _Error } from './Error';

export class _TimeoutError extends _Error {
    public constructor(
        props: TimeoutErrorProps,
        options: ErrorOptions<TimeoutErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when the time allotted for a process or operation has expired.
 */
export class TimeoutError extends _TimeoutError {
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
