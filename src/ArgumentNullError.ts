import { ErrorOptions, ArgumentNullErrorMessageProps, ArgumentNullErrorProps } from './CommonTypes';
import { AbstractArgumentError } from './ArgumentError';

export abstract class AbstractArgumentNullError extends AbstractArgumentError {
    public constructor(
        props: ArgumentNullErrorProps,
        options: ErrorOptions<ArgumentNullErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when a null reference or undefined is passed to a function or a method that does not
 * accept it as a valid argument.
 */
export class ArgumentNullError extends AbstractArgumentNullError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be
     * appended.
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
     * @param innerError The error that is the cause of the current error. Stack trace will be
     * appended.
     */
    public constructor(message: string, paramName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        function generateMessage(props: ArgumentNullErrorMessageProps) {
            return props.paramName
                ? `${props.message} (Parameter '${props.paramName}')`
                : props.message;
        }

        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, { generateMessage });
        }

        // message + paramName + innerError?
        else {
            super({ message, paramName: arg1, innerError: arg2 }, { generateMessage });
        }
    }
}
