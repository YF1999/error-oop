import { ErrorOptions, RangeErrorMessageProps, RangeErrorProps } from './CommonTypes';
import { appendInnerErrorStack, setNonEnumerable } from './utils';

export class _RangeError extends RangeError {
    protected _innerError?: Error;

    public constructor(
        props: RangeErrorProps,
        options: ErrorOptions<RangeErrorMessageProps>,
    ) {
        super();

        const { message, innerError } = props;
        const { name, generateMessage } = options;

        this._innerError = innerError;
        this.name = name || this.constructor.name;
        this.message = generateMessage ? generateMessage({ name: this.name, message }) : message;

        // When the first call to `stack` property happens, it will combine `name` and `message`
        // with trace stack to `stack` property, we should generate message before this call.
        this.stack = appendInnerErrorStack(this.stack, this._innerError);

        this._setNonEnumerable('name');
        this._setNonEnumerable('message');
        this._setNonEnumerable('stack');
        this._setNonEnumerable('_innerError');
    }

    public get innerError(): Error | undefined {
        return this._innerError;
    }

    protected _setNonEnumerable(property: string): void {
        setNonEnumerable(this, property);
    }
}

/**
 * Represents an error that occurs when a numeric variable or parameter is outside of its valid
 * range. This is roughly the same as the native RangeError class. It additionally supports an
 * innerError attribute.
 */
export class ExtendedRangeError extends _RangeError {
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
        super({ message, innerError }, { name: 'RangeError' });
    }
}
