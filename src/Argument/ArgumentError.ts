import { ExtendedError } from '../Error';

export class ArgumentError extends ExtendedError {
    protected _paramName?: string;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: ExtendedError);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: ExtendedError);

    public constructor(message?: string, arg1?: string | ExtendedError, arg2?: ExtendedError) {
        // message?
        if (message === undefined) {
            super();
        }

        // message + innerError?/paramName?
        else if (arg1 === undefined) {
            super(message);
        }

        // message + innerError
        else if (typeof arg1 !== 'string') {
            super(message, arg1);
        }

        // message + paramName + innerError?
        else if (arg2 === undefined) {
            super(message);
            this._paramName = arg1;
        }

        // message + paramName + innerError
        else {
            super(message, arg2);
            this._paramName = arg1;
        }
    }

    public get message() {
        return this._paramName
            ? `${this._message} (Parameter '${this._paramName}')`
            : this._message;
    }

    public get paramName() {
        return this._paramName;
    }
}
