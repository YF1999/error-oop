import { ErrorOptions, UnauthorizedAccessErrorMessageProps, UnauthorizedAccessErrorProps } from './CommonTypes';
import { AbstractError } from './Native';

export abstract class AbstractUnauthorizedAccessError extends AbstractError {
    public constructor(
        props: UnauthorizedAccessErrorProps,
        options: ErrorOptions<UnauthorizedAccessErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when the operating system denies access because of an I/O error or a specific type of
 * security error.
 */
export class UnauthorizedAccessError extends AbstractUnauthorizedAccessError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
