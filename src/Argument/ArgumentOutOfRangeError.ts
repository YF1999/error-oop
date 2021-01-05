import { ArgumentError } from './ArgumentError';

export class ArgumentOutOfRangeError extends ArgumentError {
    protected _actualValue?: string;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: Error);
    public constructor(message: string, paramName: string, actualValue: any);
    public constructor(message: string, paramName: string, actualValue: any, innerError: Error);

    public constructor(message?: string, arg1?: string | Error, arg2?: any, arg3?: Error) {
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

        // message + paramName + innerError?/actualValue?
        else if (arg2 === undefined) {
            super(message, arg1);
        }

        // message + paramName + innerError
        else if (arg2 instanceof Error) {
            super(message, arg1, arg2);
        }

        // message + paramName + actualValue + innerError?
        else if (arg3 === undefined) {
            super(message, arg1);
            this._actualValue = arg2;
        }

        // message + paramName + actualValue + innerError
        else {
            super(message, arg1, arg3);
            this._actualValue = arg2;
        }
    }

    public get message() {
        let append;
        if (this._paramName && this._actualValue) {
            append = `(Parameter '${this._paramName}', ActualValue '${this._actualValue}')`;
        } else if (this._paramName && !this._actualValue) {
            append = `(Parameter '${this._paramName}')`;
        }

        return append ? `${this._message} ${append}` : this._message;
    }

    public get actualValue() {
        return this._actualValue;
    }
}
