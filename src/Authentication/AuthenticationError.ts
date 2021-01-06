import {
    ErrorOptions,
    AuthenticationErrorMessageProps,
    AuthenticationErrorProps,
} from '../CommonTypes';
import { _Error } from '../Error';

export class _AuthenticationError extends _Error {
    public constructor(
        props: AuthenticationErrorProps,
        options: ErrorOptions<AuthenticationErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class AuthenticationError extends _AuthenticationError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
