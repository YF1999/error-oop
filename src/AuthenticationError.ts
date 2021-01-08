import {
    ErrorOptions,
    AuthenticationErrorMessageProps,
    AuthenticationErrorProps,
} from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractAuthenticationError extends AbstractError {
    public constructor(
        props: AuthenticationErrorProps,
        options: ErrorOptions<AuthenticationErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when authentication fails for an authentication stream.
 */
export class AuthenticationError extends AbstractAuthenticationError {
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
