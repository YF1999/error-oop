import { ErrorProps } from '../CommonTypes';
import { appendInnerErrorStack, setNonEnumerable } from './Tools';

export abstract class AbstractError extends Error {
    #innerError?: Error;

    public constructor(props: ErrorProps) {
        super(props.message);

        this.#innerError = props.innerError;

        // When the first call to `stack` property happens, it will combine `name` and `message` with trace stack to
        // `stack` property, we should generate message before this call.
        this.stack = appendInnerErrorStack(this.stack, this.#innerError);

        this._setNonEnumerable('stack');
    }

    public get name(): string {
        return this.constructor.name;
    }

    public get innerError(): Error | undefined {
        return this.#innerError;
    }

    protected _setNonEnumerable(property: string): void {
        setNonEnumerable(this, property);
    }
}

/**
 * This is roughly the same as the native Error class. It additionally supports an innerError attribute.
 */
export class NativeError extends AbstractError {
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
        super({ message, innerError });
    }
}

export { NativeError as Error };