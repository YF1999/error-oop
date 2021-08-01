import { ErrorTool, IErrorArguments } from '../Native';

import { IOError, IIOErrorOptions } from './IOError';

export interface IEndOfStreamErrorOptions extends IIOErrorOptions {}

/**
 * Applicable when reading is attempted past the end of a stream.
 */
export class EndOfStreamError extends IOError {
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
     * @param options The constructor options.
     */
    public constructor(options: IEndOfStreamErrorOptions);

    public constructor(...args: IErrorArguments<IEndOfStreamErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
