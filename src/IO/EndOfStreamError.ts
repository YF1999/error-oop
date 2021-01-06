import {
    ErrorOptions,
    EndOfStreamErrorMessageProps,
    EndOfStreamErrorProps,
} from '../CommonTypes';
import { _IOError } from './IOError';

export class _EndOfStreamError extends _IOError {
    public constructor(
        props: EndOfStreamErrorProps,
        options: ErrorOptions<EndOfStreamErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class EndOfStreamError extends _EndOfStreamError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
