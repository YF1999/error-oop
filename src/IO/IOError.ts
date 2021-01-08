import { ErrorOptions, IOErrorMessageProps, IOErrorProps } from '../CommonTypes';
import { _Error } from '../NativeErrors';

export class _IOError extends _Error {
    public constructor(props: IOErrorProps, options: ErrorOptions<IOErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when an I/O error occurs.
 */
export class IOError extends _IOError {
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
