import { IErrorArguments } from '../Native';
import { InternalErrorTool } from '../InternalTools';

import { IIOErrorOptions, IOError } from './IOError';

export interface ISocketErrorOptions extends IIOErrorOptions {}

/**
 * Applicable when an error occurs on a socket.
 */
export class SocketError extends IOError {
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
    public constructor(options: ISocketErrorOptions);

    public constructor(...args: IErrorArguments<ISocketErrorOptions>) {
        super(InternalErrorTool.parseErrorArguments([], ...args));
    }
}
