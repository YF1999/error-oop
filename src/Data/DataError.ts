import { ErrorOptions, DataErrorMessageProps, DataErrorProps } from '../CommonTypes';
import { AbstractError } from '../NativeErrors';

export abstract class AbstractDataError extends AbstractError {
    public constructor(props: DataErrorProps, options: ErrorOptions<DataErrorMessageProps>) {
        super(props, options);
    }
}

/**
 * Applicable when an error occurs on or with an external data source.
 */
export class DataError extends AbstractDataError {
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
