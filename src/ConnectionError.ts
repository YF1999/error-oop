import { ErrorOptions, ConnectionErrorMessageProps, ConnectionErrorProps } from './CommonTypes';
import { _Error } from './ExtendedNodeError';

export class _ConnectionError extends _Error {
    public constructor(
        props: ConnectionErrorProps,
        options: ErrorOptions<ConnectionErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when an error occurs on a connection.
 */
export class ConnectionError extends _ConnectionError {
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
