import { ErrorOptions, FileNotFoundErrorMessageProps, FileNotFoundErrorProps } from '../CommonTypes';
import { AbstractIOError } from './IOError';

export abstract class AbstractFileNotFoundError extends AbstractIOError {
    private _fileName?: string;

    public constructor(props: FileNotFoundErrorProps, options: ErrorOptions<FileNotFoundErrorMessageProps>) {
        const { fileName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, fileName })),
            ...others,
        });

        this._fileName = fileName;
        this._setNonEnumerable('_fileName');
    }

    public get fileName(): string | undefined {
        return this._fileName;
    }
}

/**
 * Applicable when an attempt to access a file that does not exist on disk fails.
 */
export class FileNotFoundError extends AbstractFileNotFoundError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append. appended.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName The full name of the file with the invalid image.
     */
    public constructor(message: string, fileName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName The full name of the file with the invalid image.
     * @param innerError The error that is the cause of the current error. Stack trace will be append. appended.
     */
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
