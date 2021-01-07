import {
    ErrorOptions,
    DriveNotFoundErrorMessageProps,
    DriveNotFoundErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

export class _DriveNotFoundError extends _IOError {
    public constructor(
        props: DriveNotFoundErrorProps,
        options: ErrorOptions<DriveNotFoundErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when trying to access a drive or share that is not available.
 */
export class DriveNotFoundError extends _DriveNotFoundError {
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
