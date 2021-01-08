import { ErrorOptions, NotSupportedErrorMessageProps, NotSupportedErrorProps } from './CommonTypes';
import { _Error } from './NativeErrorsPro';

export class _NotSupportedError extends _Error {
    public constructor(
        props: NotSupportedErrorProps,
        options: ErrorOptions<NotSupportedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when an invoked method is not supported, or when there is an attempt to read, seek, or
 * write to a stream that does not support the invoked functionality.
 */
export class NotSupportedError extends _NotSupportedError {
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
