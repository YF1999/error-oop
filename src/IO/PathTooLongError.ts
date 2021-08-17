import { IErrorArguments } from '../Native';
import { InternalErrorTool } from '../InternalTools';

import { IIOErrorOptions, IOError } from './IOError';

export interface IPathTooLongErrorOptions extends IIOErrorOptions {}

/**
 * Applicable when a path or fully qualified file name is longer than the system-defined maximum length.
 *
 * More information for Windows:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export class PathTooLongError extends IOError {
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
    public constructor(options: IPathTooLongErrorOptions);

    public constructor(...args: IErrorArguments<IPathTooLongErrorOptions>) {
        super(InternalErrorTool.parseErrorArguments([], ...args));
    }
}
