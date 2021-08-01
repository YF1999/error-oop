import { ArgumentError, IArgumentErrorOptions } from './ArgumentError';
import { ErrorTool, IErrorArguments } from './Native';

export interface IArgumentNullErrorOptions extends IArgumentErrorOptions {}

/**
 * Applicable when a null reference or undefined is passed to a function or a method that does not accept it as a valid
 * argument.
 */
export class ArgumentNullError extends ArgumentError {
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
     * @param options The constructor options.
     */
    public constructor(options: IArgumentNullErrorOptions);

    public constructor(...args: IErrorArguments<IArgumentNullErrorOptions, ['paramName']>) {
        super(ErrorTool.parseErrorArguments(['paramName'], ...args));
    }
}
