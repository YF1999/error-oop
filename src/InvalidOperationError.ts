import {
    ErrorOptions,
    InvalidOperationErrorMessageProps,
    InvalidOperationErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _InvalidOperationError extends _Error {
    public constructor(
        props: InvalidOperationErrorProps,
        options: ErrorOptions<InvalidOperationErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class InvalidOperationError extends _InvalidOperationError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
