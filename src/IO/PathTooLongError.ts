import {
    ErrorOptions,
    PathTooLongErrorMessageProps,
    PathTooLongErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

/**
 * For Windows, more information:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export class _PathTooLongError extends _IOError {
    public constructor(
        props: PathTooLongErrorProps,
        options: ErrorOptions<PathTooLongErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * For Windows, more information:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export class PathTooLongError extends _PathTooLongError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
