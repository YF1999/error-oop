import { setAllFieldsNonEnumerable } from './utils';
import { ExtendedError } from './Error';

export class NotFoundError extends ExtendedError {
    protected _entityName?: string;

    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: ExtendedError);
    public constructor(message: string, entityName: string);
    public constructor(message: string, entityName: string, innerError: ExtendedError);

    public constructor(message?: string, arg1?: string | ExtendedError, arg2?: ExtendedError) {
        // message?
        if (message === undefined) {
            super();
        }

        // message + innerError?/entityName?
        else if (arg1 === undefined) {
            super(message);
        }

        // message + innerError
        else if (typeof arg1 !== 'string') {
            super(message, arg1);
        }

        // message + entityName + innerError?
        else if (arg2 === undefined) {
            super(message);
            this._entityName = arg1;
        }

        // message + entityName + innerError
        else {
            super(message, arg2);
            this._entityName = arg1;
        }

        setAllFieldsNonEnumerable(this);
    }

    public get entityName() {
        return this._entityName;
    }
}
