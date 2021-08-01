export interface IErrorOptions {
    /**
     * The error message that explains the reason for this error.
     */
    message?: string;
    /**
     * The error that is the cause of the current error. Stack trace will be appended.
     */
    innerError?: Error;
}

export type IStandardArguments<T extends IErrorOptions> = [] | [T] | [string, Error?];
