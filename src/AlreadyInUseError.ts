import { ExtendedError } from './Error';

export class AlreadyInUseError extends ExtendedError {
    protected _entityName: string;
    protected _inUseFor: string[];

    public constructor(entityName: string);
    public constructor(entityName: string, arg1: string);
    public constructor(entityName: string, arg1: string, arg2: string);
    public constructor(entityName: string, arg1: string, arg2: string, arg3: string);
    public constructor(entityName: string, args: string[]);

    public constructor(entityName: string, arg1?: string | string[], arg2?: string, arg3?: string) {
        // entityName + arg1?/args?
        if (arg1 === undefined) {
            super();
            this._entityName = entityName;
            this._inUseFor = [];
        }

        // entityName + args
        else if (Array.isArray(arg1)) {
            super();
            this._entityName = entityName;
            this._inUseFor = arg1;
        }

        // entityName + arg1 + arg2?
        else if (arg2 === undefined) {
            super();
            this._entityName = entityName;
            this._inUseFor = [arg1];
        }

        // entityName + arg1 + arg2 + arg3?
        else if (arg3 === undefined) {
            super();
            this._entityName = entityName;
            this._inUseFor = [arg1, arg2];
        }

        // entityName + arg1 + arg2 + arg3
        else {
            super();
            this._entityName = entityName;
            this._inUseFor = [arg1, arg2, arg3];
        }
    }

    public get message() {
        const _inUseFor = this._inUseFor.join(', ');

        return _inUseFor === ''
            ? `The specified '${this._entityName}' value is already in use.`
            : `The specified '${this._entityName}' value is already in use for: ${_inUseFor}`;
    }

    public get entityName() {
        return this._entityName;
    }
}
