import {
    ErrorOptions,
    AuthenticationRequiredErrorMessageProps,
    AuthenticationRequiredErrorProps,
} from '../CommonTypes';
import { _Error } from '../Error';

export class _AuthenticationRequiredError extends _Error {
    public constructor(
        props: AuthenticationRequiredErrorProps,
        options: ErrorOptions<AuthenticationRequiredErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class AuthenticationRequiredError extends _AuthenticationRequiredError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
