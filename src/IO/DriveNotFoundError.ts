import { ErrorTool, IErrorArguments } from '../Native';

import { IOError, IIOErrorOptions } from './IOError';

export interface IDriveNotFoundErrorOptions extends IIOErrorOptions {}

/**
 * Applicable when trying to access a drive or share that is not available.
 */
export class DriveNotFoundError extends IOError {
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
    public constructor(options: IDriveNotFoundErrorOptions);

    public constructor(...args: IErrorArguments<IDriveNotFoundErrorOptions>) {
        super(ErrorTool.parseErrorArguments([], ...args));
    }
}
