import {
    ErrorOptions,
    AuthenticationRequiredErrorMessageProps,
    AuthenticationRequiredErrorProps,
} from './CommonTypes';
import { _Error } from './NativeErrorsPro';

export class _AuthenticationRequiredError extends _Error {
    public constructor(
        props: AuthenticationRequiredErrorProps,
        options: ErrorOptions<AuthenticationRequiredErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when authentication fails for an authentication stream.
 */
export class AuthenticationRequiredError extends _AuthenticationRequiredError {
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
