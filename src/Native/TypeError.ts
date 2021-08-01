import { ErrorOptions, TypeErrorMessageProps, TypeErrorProps } from '../CommonTypes';
import { setNonEnumerable } from '../utils';
import { appendInnerErrorStack } from './AppendInnerErrorStack';

export abstract class AbstractTypeError extends TypeError {
    protected _innerError?: Error;

    public constructor(props: TypeErrorProps, options: ErrorOptions<TypeErrorMessageProps>) {
        super();

        const { message, innerError } = props;
        const { generateMessage } = options;

        this._innerError = innerError;
        this.message = generateMessage ? generateMessage({ name: this.name, message }) : message;

        // When the first call to `stack` property happens, it will combine `name` and `message` with trace stack to
        // `stack` property, we should generate message before this call.
        this.stack = appendInnerErrorStack(this.stack, this._innerError);

        this._setNonEnumerable('message');
        this._setNonEnumerable('stack');
        this._setNonEnumerable('_innerError');
    }

    public get name(): string {
        return this.constructor.name;
    }

    public get innerError(): Error | undefined {
        return this._innerError;
    }

    protected _setNonEnumerable(property: string): void {
        setNonEnumerable(this, property);
    }
}

/**
 * Represents an error when a value is not of the expected type. This is roughly the same as the native TypeError class.
 * It additionally supports an innerError attribute.
 */
export class TypeErrorPro extends AbstractTypeError {
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
        super({ message, innerError }, {});
    }
}

export { TypeErrorPro as TypeError };
