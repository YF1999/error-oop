import { ErrorOptions, IOErrorMessageProps, IOErrorProps } from '../CommonTypes';
import { _Error } from '../Error';

export class _IOError extends _Error {
    public constructor(props: IOErrorProps, options: ErrorOptions<IOErrorMessageProps>) {
        super(props, options);
    }
}

export class IOError extends _IOError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
