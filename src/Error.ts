class ExtendedError extends Error {
    protected _name: string;
    protected _message: string;
    protected _stack?: string;
    protected _innerError?: Error;

    public constructor(message?: string, innerError?: Error) {
        const _err = (super(message) as any) as Error;

        this._name = this.constructor.name;
        this._message = _err.message;
        this._stack = _err.stack;
        this._innerError = innerError;
    }

    public get name() {
        return this._name;
    }

    public get message() {
        return this._message;
    }

    public get stack() {
        return this._innerError && this._innerError.stack
            ? `${this._stack ?? ''}\n--- inner error ---\n${this._innerError.stack}`
            : this._stack;
    }

    public get innerError() {
        return this._innerError;
    }
}

export { ExtendedError as Error };
