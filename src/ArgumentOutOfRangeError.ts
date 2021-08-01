import { ArgumentOutOfRangeErrorProps } from './CommonTypes';
import { AbstractArgumentError } from './ArgumentError';

export abstract class AbstractArgumentOutOfRangeError extends AbstractArgumentError {
    protected _actualValue?: unknown;

    public constructor(props: ArgumentOutOfRangeErrorProps) {
        super(props);

        this._actualValue = props.actualValue;
        this._setNonEnumerable('_actualValue');
    }

    public get actualValue(): unknown | undefined {
        return this._actualValue;
    }
}

/**
 * Applicable when the value of an argument is outside the allowable range of values as defined by
 * the invoked function or method.
 */
export class ArgumentOutOfRangeError extends AbstractArgumentOutOfRangeError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
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
     * @param innerError The error that is the cause of the current error. Stack trace will be append.

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
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, paramName: string, actualValue: unknown, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: unknown, arg3?: Error) {
        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 });
        }

        // message + paramName + innerError?
        else if (arg2 === undefined || arg2 instanceof Error) {
            super({ message: `${message} (Parameter '${arg1}')`, innerError: arg2, paramName: arg1 });
        }

        // message + paramName + actualValue + innerError?
        else {
            super({
                message: `${message} (Parameter '${arg1}', ActualValue '${arg2}')`,
                actualValue: arg2,
                innerError: arg3,
                paramName: arg1,
            });
        }
    }
}
