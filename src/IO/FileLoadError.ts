import { ErrorOptions, FileLoadErrorMessageProps, FileLoadErrorProps } from '../CommonTypes';
import { _IOError } from './IOError';

export class _FileLoadError extends _IOError {
    private _fileName?: string;

    public constructor(
        props: FileLoadErrorProps,
        options: ErrorOptions<FileLoadErrorMessageProps>,
    ) {
        const { fileName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, fileName })),
            ...others,
        });

        this._fileName = fileName;
        this._setNonEnumerable('_fileName');
    }

    public get fileName() {
        return this._fileName;
    }
}

export class FileLoadError extends _FileLoadError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);
    public constructor(message: string, fileName: string);
    public constructor(message: string, fileName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, {});
        }

        // message + fileName + innerError?
        else {
            super({ message, fileName: arg1, innerError: arg2 }, {});
        }
    }
}
