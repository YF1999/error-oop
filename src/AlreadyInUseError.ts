import { IErrorOptions, NativeError } from './Native';

export interface IAlreadyInUseErrorOptions extends IErrorOptions {}

/**
 * Applicable when a resource is already in use, for example unique key constraints like a username.
 */
export class AlreadyInUseError extends NativeError {
    protected _entityName: string;
    protected _inUse: string[];

    /**
     * @param entityName The entity that owns the protected resource.
     */
    public constructor(entityName: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     * @param arg2 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string, arg2: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param arg1 A field or attribute that is already in use.
     * @param arg2 A field or attribute that is already in use.
     * @param arg3 A field or attribute that is already in use.
     */
    public constructor(entityName: string, arg1: string, arg2: string, arg3: string);
    /**
     * @param entityName The entity that owns the protected resource.
     * @param args Fields or attributes that are already in use.
     */
    public constructor(entityName: string, ...args: string[]);

    public constructor(entityName: string, ...args: string[]) {
        const inUse = args.filter((e) => e !== undefined) as string[];

        const message =
            inUse.length === 0
                ? `The specified '${entityName}' value is already in use.`
                : `The specified '${entityName}' value is already in use: ${inUse.join(', ')}`;

        super({ message });

        this._entityName = entityName;
        this._inUse = inUse;
        this._setNonEnumerable('_entityName');
        this._setNonEnumerable('_inUse');
    }

    public get entityName(): string {
        return this._entityName;
    }
}
