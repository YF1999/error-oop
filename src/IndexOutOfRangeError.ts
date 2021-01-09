import {
    ErrorOptions,
    IndexOutOfRangeErrorMessageProps,
    IndexOutOfRangeErrorProps,
} from './CommonTypes';
import { AbstractError } from './NativeErrors';

export abstract class AbstractIndexOutOfRangeError extends AbstractError {
    public constructor(
        props: IndexOutOfRangeErrorProps,
        options: ErrorOptions<IndexOutOfRangeErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when an attempt is made to access an element of an array or collection with an index
 * that is outside its bounds.
 */
export class IndexOutOfRangeError extends AbstractIndexOutOfRangeError {
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
