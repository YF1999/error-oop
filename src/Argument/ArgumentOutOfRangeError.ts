import { IErrorArguments } from '../Native';
import { ErrorTool } from '../Tools';
import { ArgumentError, IArgumentErrorOptions } from './ArgumentError';

export interface IArgumentOutOfRangeErrorOptions extends IArgumentErrorOptions {
    /**
     * The value of the argument that causes this error.
     */
    actualValue?: unknown;
}

/**
 * Applicable when the value of an argument is outside the allowable range of values as defined by the invoked function
 * or method.
 */
export class ArgumentOutOfRangeError extends ArgumentError {
    protected _actualValue?: unknown;

    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     */
    public constructor(message: string, paramName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, paramName: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     * @param actualValue The value of the argument that causes this error.
     */
    public constructor(message: string, paramName: string, actualValue: unknown);
    /**
     * @param message The error message that explains the reason for this error.
     * @param paramName The name of the parameter that caused the current error.
     * @param actualValue The value of the argument that causes this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, paramName: string, actualValue: unknown, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IArgumentOutOfRangeErrorOptions);

    public constructor(...args: IErrorArguments<IArgumentOutOfRangeErrorOptions, ['paramName', 'actualValue']>) {
        const opts = ErrorTool.parseErrorArguments(['paramName', 'actualValue'], ...args);

        if ('actualValue' in opts && opts.paramName && opts.noMessageSuffix !== true) {
            opts.noMessageSuffix = true;
            opts.message = `${opts.message} (Parameter '${opts.paramName}', ActualValue '${opts.actualValue}')`;
        }

        super(opts);

        this._actualValue = opts.actualValue;
        this._setNonEnumerable('_actualValue');
    }

    public get actualValue(): unknown | undefined {
        return this._actualValue;
    }
}
