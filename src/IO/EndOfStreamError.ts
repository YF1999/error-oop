import { ErrorOptions, EndOfStreamErrorMessageProps, EndOfStreamErrorProps } from '../CommonTypes';
import { _IOError } from './IOError';

export class _EndOfStreamError extends _IOError {
    public constructor(
        props: EndOfStreamErrorProps,
        options: ErrorOptions<EndOfStreamErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when reading is attempted past the end of a stream.
 */
export class EndOfStreamError extends _EndOfStreamError {
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
