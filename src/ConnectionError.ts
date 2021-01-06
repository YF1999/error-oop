import {
    ErrorOptions,
    ConnectionErrorMessageProps,
    ConnectionErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _ConnectionError extends _Error {
    public constructor(
        props: ConnectionErrorProps,
        options: ErrorOptions<ConnectionErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class ConnectionError extends _ConnectionError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
