import {
    ErrorOptions,
    NotPermittedErrorMessageProps,
    NotPermittedErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _NotPermittedError extends _Error {
    public constructor(
        props: NotPermittedErrorProps,
        options: ErrorOptions<NotPermittedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class NotPermittedError extends _NotPermittedError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
