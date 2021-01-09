// Native Errors Pro

export interface ErrorProps {
    message: string;
    innerError?: Error;
}
export interface RangeErrorProps extends ErrorProps {}
export interface ReferenceErrorProps extends ErrorProps {}
export interface SyntaxErrorProps extends ErrorProps {}
export interface TypeErrorProps extends ErrorProps {}
export interface URIErrorProps extends ErrorProps {}

// More Useful Errors

export interface AlreadyInUseErrorProps extends ErrorProps {
    entityName: string;
    inUse: string[];
}
export interface ArgumentErrorProps extends ErrorProps {
    paramName?: string;
}
export interface ArgumentNullErrorProps extends ArgumentErrorProps {}
export interface ArgumentOutOfRangeErrorProps extends ArgumentErrorProps {
    actualValue?: string;
}
export interface AuthenticationErrorProps extends ErrorProps {}
export interface AuthenticationRequiredErrorProps extends AuthenticationErrorProps {}
export interface ConnectionErrorProps extends ErrorProps {}
export interface IndexOutOfRangeErrorProps extends ErrorProps {}
export interface InvalidOperationErrorProps extends ErrorProps {}
export interface NotFoundErrorProps extends ErrorProps {
    entityName?: string;
}
export interface NotImplementedErrorProps extends ErrorProps {}
export interface NotPermittedErrorProps extends ErrorProps {}
export interface NotSupportedErrorProps extends ErrorProps {}
export interface OperationCanceledErrorProps extends ErrorProps {}
export interface OutOfMemoryErrorProps extends ErrorProps {}
export interface StackOverflowErrorProps extends ErrorProps {}
export interface TimeoutErrorProps extends ErrorProps {}
export interface UnauthorizedAccessErrorProps extends ErrorProps {}
export interface UnauthorizedErrorProps extends ErrorProps {}

// Data

export interface DataErrorProps extends ErrorProps {}
export interface TransactionErrorProps extends DataErrorProps {}

// IO

export interface IOErrorProps extends ErrorProps {}
export interface DirectoryNotFoundErrorProps extends IOErrorProps {}
export interface DriveNotFoundErrorProps extends IOErrorProps {}
export interface EndOfStreamErrorProps extends IOErrorProps {}
export interface FileLoadErrorProps extends IOErrorProps {
    fileName?: string;
}
export interface FileNotFoundErrorProps extends IOErrorProps {
    fileName?: string;
}
export interface PathTooLongErrorProps extends IOErrorProps {}
export interface SocketErrorProps extends IOErrorProps {}
