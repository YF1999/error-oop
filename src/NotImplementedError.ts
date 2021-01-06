import {
    ErrorOptions,
    NotImplementedErrorMessageProps,
    NotImplementedErrorProps,
} from './CommonTypes';
import { _Error } from './Error';

export class _NotImplementedError extends _Error {
    public constructor(
        props: NotImplementedErrorProps,
        options: ErrorOptions<NotImplementedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class NotImplementedError extends _NotImplementedError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
