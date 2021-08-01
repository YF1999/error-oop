import { DriveNotFoundErrorProps } from '../CommonTypes';
import { AbstractIOError } from './IOError';

export abstract class AbstractDriveNotFoundError extends AbstractIOError {
    public constructor(props: DriveNotFoundErrorProps) {
        super(props);
    }
}

/**
 * Applicable when trying to access a drive or share that is not available.
 */
export class DriveNotFoundError extends AbstractDriveNotFoundError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append. appended.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError });
    }
}
