import {
    ErrorOptions,
    DriveNotFoundErrorMessageProps,
    DriveNotFoundErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

export class _DriveNotFoundError extends _IOError {
    public constructor(
        props: DriveNotFoundErrorProps,
        options: ErrorOptions<DriveNotFoundErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class DriveNotFoundError extends _DriveNotFoundError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
