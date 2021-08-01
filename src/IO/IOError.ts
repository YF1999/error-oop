import { IOErrorProps } from '../CommonTypes';
import { AbstractError } from '../Native';

export abstract class AbstractIOError extends AbstractError {
    public constructor(props: IOErrorProps) {
        super(props);
    }
}

/**
 * Applicable when an I/O error occurs.
 */
export class IOError extends AbstractIOError {
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
