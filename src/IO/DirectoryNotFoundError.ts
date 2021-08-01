import { ErrorTool, IErrorArguments } from '../Native';

import { IOError, IIOErrorOptions } from './IOError';

export interface IDirectoryNotFoundErrorOptions extends IIOErrorOptions {}

/**
 * Applicable when part of a file or directory cannot be found.
 */
export class DirectoryNotFoundError extends IOError {
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
    public constructor(options: IDirectoryNotFoundErrorOptions);

    public constructor(...args: IErrorArguments<IDirectoryNotFoundErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
