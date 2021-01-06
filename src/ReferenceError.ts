import { appendInnerErrorStack, setAllFieldsNonEnumerable } from './utils';

export class ExtendedReferenceError extends ReferenceError {
    protected _name: string;
    protected _message: string;
    protected _stack?: string;
    protected _innerError?: Error;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message?: string, innerError?: Error) {
        const _err = (super(message) as any) as Error;

        this._name = this.constructor.name;
        this._message = _err.message;
        this._stack = _err.stack;
        this._innerError = innerError;

        setAllFieldsNonEnumerable(this);
    }

    public get name() {
        return this._name;
    }

    public get message() {
        return this._message;
    }

    public get stack() {
        return appendInnerErrorStack(this._stack, this._innerError);
    }

    public get innerError() {
        return this._innerError;
    }
}
