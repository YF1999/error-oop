import { ErrorTool, IErrorArguments } from '../Native';
import { IIOErrorOptions, IOError } from './IOError';

export interface IFileLoadErrorOptions extends IIOErrorOptions {
    /**
     * A String containing the name of the file that was not loaded.
     */
    fileName?: string;
}

/**
 * Applicable when a managed assembly is found but cannot be loaded.
 */
export class FileLoadError extends IOError {
    private _fileName?: string;

    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName A String containing the name of the file that was not loaded.
     */
    public constructor(message: string, fileName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName A String containing the name of the file that was not loaded.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, fileName: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IFileLoadErrorOptions);

    public constructor(...args: IErrorArguments<IFileLoadErrorOptions, ['fileName']>) {
        const options = ErrorTool.parseErrorArguments(['fileName'] as const, ...args);

        super(options);

        this._fileName = options.fileName;
        this._setNonEnumerable('_fileName');
    }

    public get fileName(): string | undefined {
        return this._fileName;
    }
}
