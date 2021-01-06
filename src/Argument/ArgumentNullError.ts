import {
    ErrorOptions,
    ArgumentNullErrorMessageProps,
    ArgumentNullErrorProps,
} from '../CommonTypes';
import { _ArgumentError } from './ArgumentError';

export class _ArgumentNullError extends _ArgumentError {
    public constructor(
        props: ArgumentNullErrorProps,
        options: ErrorOptions<ArgumentNullErrorMessageProps>,
    ) {
        super(props, options);
    }
}

export class ArgumentNullError extends _ArgumentNullError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        function generateMessage(props: ArgumentNullErrorMessageProps) {
            return props.paramName
                ? `${props.message} (Parameter '${props.paramName}')`
                : props.message;
        }

        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, { generateMessage });
        }

        // message + paramName + innerError?
        else {
            super({ message, paramName: arg1, innerError: arg2 }, { generateMessage });
        }
    }
}
