import { ExtendedError } from '../Error';

export class ArgumentError extends ExtendedError {
    protected _paramName?: string;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: Error);

    public constructor(message?: string, arg1?: string | Error, arg2?: Error) {
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

        if (this._paramName) {
            this.message = `${this.message} (Parameter '${this._paramName}')`;
        }

        this._setNonEnumerable('_paramName');
    }

    public get paramName() {
        return this._paramName;
    }
}
