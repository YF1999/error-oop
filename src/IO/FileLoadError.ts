import { IOError } from './IOError';

export class FileLoadError extends IOError {
    private _fileName?: string;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, fileName: string);
    public constructor(message: string, fileName: string, innerError: Error);

    public constructor(message?: string, arg1?: string | Error, arg2?: Error) {
        // message?
        if (message === undefined) {
            super();
        }

        // message + innerError?/fileName?
        else if (arg1 === undefined) {
            super(message);
        }

        // message + innerError
        else if (typeof arg1 !== 'string') {
            super(message, arg1);
        }

        // message + fileName + innerError?
        else if (arg2 === undefined) {
            super(message);
            this._fileName = arg1;
        }

        // message + fileName + innerError
        else {
            super(message, arg2);
            this._fileName = arg1;
        }
    }

    get fileName() {
        return this._fileName;
    }
}
