import { ErrorOptions, PathTooLongErrorMessageProps, PathTooLongErrorProps } from '../CommonTypes';
import { AbstractIOError } from './IOError';

/**
 * More information for Windows:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export abstract class AbstractPathTooLongError extends AbstractIOError {
    public constructor(
        props: PathTooLongErrorProps,
        options: ErrorOptions<PathTooLongErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when a path or fully qualified file name is longer than the system-defined maximum
 * length.
 *
 * More information for Windows:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export class PathTooLongError extends AbstractPathTooLongError {
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

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
