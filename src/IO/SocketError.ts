import { ErrorOptions, SocketErrorMessageProps, SocketErrorProps } from '../CommonTypes';
import { AbstractIOError } from './IOError';

export abstract class AbstractSocketError extends AbstractIOError {
    public constructor(props: SocketErrorProps, options: ErrorOptions<SocketErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when an error occurs on a socket.
 */
export class SocketError extends AbstractSocketError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append. appended.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
