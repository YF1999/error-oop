import { ErrorOptions, UnauthorizedErrorMessageProps, UnauthorizedErrorProps } from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractUnauthorizedError extends AbstractError {
    public constructor(
        props: UnauthorizedErrorProps,
        options: ErrorOptions<UnauthorizedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when the operating system denies access because of an I/O error or a specific type of
 * security error.
 */
export class UnauthorizedError extends AbstractUnauthorizedError {
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
