import {
    ErrorOptions,
    ArgumentOutOfRangeMessageProps,
    ArgumentOutOfRangeErrorProps,
} from '../CommonTypes';
import { _ArgumentError } from './ArgumentError';

export class _ArgumentOutOfRangeError extends _ArgumentError {
    protected _actualValue?: string;

    public constructor(
        props: ArgumentOutOfRangeErrorProps,
        options: ErrorOptions<ArgumentOutOfRangeMessageProps>,
    ) {
        const { actualValue } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, actualValue })),
            ...others,
        });

        this._actualValue = actualValue;
        this._setNonEnumerable('_actualValue');
    }

    public get actualValue() {
        return this._actualValue;
    }
}

export class ArgumentOutOfRangeError extends _ArgumentOutOfRangeError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, paramName: string);
    public constructor(message: string, paramName: string, innerError: Error);
    public constructor(message: string, paramName: string, actualValue: any);
    public constructor(message: string, paramName: string, actualValue: any, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: any, arg3?: Error) {
        function generateMessage(props: ArgumentOutOfRangeMessageProps) {
            let append = '';
            if (props.paramName && props.actualValue) {
                append = ` (Parameter '${props.paramName}', ActualValue '${props.actualValue}')`;
            } else if (props.paramName && !props.actualValue) {
                append = ` (Parameter '${props.paramName}')`;
            }

            return props.message + append;
        }

        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, { generateMessage });
        }

        // message + paramName + innerError?
        else if (arg2 === undefined || arg2 instanceof Error) {
            super({ message, innerError: arg2, paramName: arg1 }, { generateMessage });
        }

        // message + paramName + actualValue + innerError?
        else {
            super(
                { message, actualValue: arg2, innerError: arg3, paramName: arg1 },
                { generateMessage },
            );
        }
    }
}
