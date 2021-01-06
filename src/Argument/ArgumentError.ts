import { ArgumentErrorProps, ErrorOptions, ArgumentErrorMessageProps } from '../CommonTypes';
import { _Error } from '../Error';

export class _ArgumentError extends _Error {
    protected _paramName?: string;

    public constructor(
        props: ArgumentErrorProps,
        options: ErrorOptions<ArgumentErrorMessageProps>,
    ) {
        const { paramName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, paramName })),
            ...others,
        });

        this._paramName = paramName;
        this._setNonEnumerable('_paramName');
    }

    public get paramName() {
        return this._paramName;
    }
}

export class ArgumentError extends _ArgumentError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        function generateMessage(props: ArgumentErrorMessageProps) {
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
