import { appendInnerErrorStack, setNonEnumerable } from './Tools';
import { IErrorOptions, IStandardArguments } from './Types';

/**
 * This is roughly the same as the native Error class. It additionally supports an innerError attribute.
 */
export class NativeError extends Error {
    #innerError?: Error;

    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IErrorOptions);

    public constructor(...[arg1, arg2]: IStandardArguments<IErrorOptions>) {
        super(typeof arg1 === 'object' ? arg1.message : arg1);

        // eslint-disable-next-line prefer-destructuring
        this.#innerError = typeof arg1 === 'object' ? arg1.innerError : arg2;

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

export { NativeError as Error };
