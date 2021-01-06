import {
    ErrorOptions,
    SocketErrorMessageProps,
    SocketErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

export class _SocketError extends _IOError {
    public constructor(
        props: SocketErrorProps,
        options: ErrorOptions<SocketErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class SocketError extends _SocketError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
