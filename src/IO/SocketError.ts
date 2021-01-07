import { ErrorOptions, SocketErrorMessageProps, SocketErrorProps } from '../CommonTypes';
import { _IOError } from './IOError';

export class _SocketError extends _IOError {
    public constructor(props: SocketErrorProps, options: ErrorOptions<SocketErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when an error occurs on a socket.
 */
export class SocketError extends _SocketError {
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
