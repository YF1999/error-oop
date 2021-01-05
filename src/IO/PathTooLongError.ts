import { IOError } from './IOError';

/**
 * For Windows, more information:
 * https://docs.microsoft.com/en-us/dotnet/api/system.io.pathtoolongexception?view=net-5.0
 */
export class PathTooLongError extends IOError {}
