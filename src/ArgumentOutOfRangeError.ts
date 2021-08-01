import { ErrorOptions, ArgumentOutOfRangeMessageProps, ArgumentOutOfRangeErrorProps } from './CommonTypes';
import { AbstractArgumentError } from './ArgumentError';

export abstract class AbstractArgumentOutOfRangeError extends AbstractArgumentError {
    protected _actualValue?: unknown;

    public constructor(props: ArgumentOutOfRangeErrorProps, options: ErrorOptions<ArgumentOutOfRangeMessageProps>) {
        const { actualValue } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, actualValue })),
            ...others,
        });

        this._actualValue = actualValue;
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
        function generateMessage(props: ArgumentOutOfRangeMessageProps) {
            let append = '';
            if (props.paramName && props.actualValue) {
                append = ` (Parameter '${props.paramName}', ActualValue '${props.actualValue}')`;
            } else if (props.paramName && !props.actualValue) {
                append = ` (Parameter '${props.paramName}')`;
            }

            return props.message + append;
        }

        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, { generateMessage });
        }

        // message + paramName + innerError?
        else if (arg2 === undefined || arg2 instanceof Error) {
            super({ message, innerError: arg2, paramName: arg1 }, { generateMessage });
        }

        // message + paramName + actualValue + innerError?
        else {
            super({ message, actualValue: arg2, innerError: arg3, paramName: arg1 }, { generateMessage });
        }
    }
}
