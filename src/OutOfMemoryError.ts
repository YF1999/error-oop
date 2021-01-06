import {
    ErrorOptions,
    OutOfMemoryErrorMessageProps,
    OutOfMemoryErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _OutOfMemoryError extends _Error {
    public constructor(
        props: OutOfMemoryErrorProps,
        options: ErrorOptions<OutOfMemoryErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class OutOfMemoryError extends _OutOfMemoryError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
