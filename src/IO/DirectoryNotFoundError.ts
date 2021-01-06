import {
    ErrorOptions,
    DirectoryNotFoundErrorMessageProps,
    DirectoryNotFoundErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

export class _DirectoryNotFoundError extends _IOError {
    public constructor(
        props: DirectoryNotFoundErrorProps,
        options: ErrorOptions<DirectoryNotFoundErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class DirectoryNotFoundError extends _DirectoryNotFoundError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
