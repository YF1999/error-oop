import { appendInnerErrorStack, setNonEnumerable } from './utils';

export class ExtendedReferenceError extends ReferenceError {
    protected _innerError?: Error;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message?: string, innerError?: Error) {
        super();

        this._innerError = innerError;
        this.name = this.constructor.name;
        this.message = message || '';

        this._setNonEnumerable('name');
        this._setNonEnumerable('message');
        this._setNonEnumerable('stack');
        this._setNonEnumerable('_innerError');
    }

    public get innerError() {
        return this._innerError;
    }

    protected _setNonEnumerable(property: string): void {
        setNonEnumerable(this, property);
    }

    protected _generateStack(): void {
        this.stack = appendInnerErrorStack(this.stack, this._innerError);
    }
}
