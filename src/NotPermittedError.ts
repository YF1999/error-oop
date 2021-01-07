import { ErrorOptions, NotPermittedErrorMessageProps, NotPermittedErrorProps } from './CommonTypes';
import { _Error } from './ExtendedNodeError';

export class _NotPermittedError extends _Error {
    public constructor(
        props: NotPermittedErrorProps,
        options: ErrorOptions<NotPermittedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when an operation is not permitted.
 */
export class NotPermittedError extends _NotPermittedError {
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
