export class InternalError extends Error {
    protected _name: string;
    protected _message: string;
    protected _stack?: string;

    public constructor(message?: string, innerError?: Error) {
        const _err = (super(message) as any) as Error;

        this._name = this.constructor.name;
        this._message = _err.message;
        this._stack = _err.stack;

        if (innerError && innerError.stack) {
            this._stack = `${this._stack ?? ''}\n--- inner error ---\n${innerError.stack}`;
        }
    }

    public get name() {
        return this._name;
    }

    public get message() {
        return this._message;
    }

    public get stack() {
        return this._stack;
    }
}
