import {
    ErrorOptions,
    AuthenticationErrorMessageProps,
    AuthenticationErrorProps,
} from '../CommonTypes';
import { _Error } from '../NativeErrorsPro';

export class _AuthenticationError extends _Error {
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
export class AuthenticationError extends _AuthenticationError {
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
