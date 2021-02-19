import { ErrorOptions, DirectoryNotFoundErrorMessageProps, DirectoryNotFoundErrorProps } from '../CommonTypes';
import { AbstractIOError } from './IOError';

export abstract class AbstractDirectoryNotFoundError extends AbstractIOError {
    public constructor(props: DirectoryNotFoundErrorProps, options: ErrorOptions<DirectoryNotFoundErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when part of a file or directory cannot be found.
 */
export class DirectoryNotFoundError extends AbstractDirectoryNotFoundError {
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
        super({ message, innerError }, {});
    }
}
