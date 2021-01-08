// Native Errors Pro

export interface ErrorMessageProps {
    name: string;
    message: string;
}
export interface RangeErrorMessageProps extends ErrorMessageProps {}
export interface ReferenceErrorMessageProps extends ErrorMessageProps {}
export interface SyntaxErrorMessageProps extends ErrorMessageProps {}
export interface TypeErrorMessageProps extends ErrorMessageProps {}
export interface URIErrorMessageProps extends ErrorMessageProps {}

// More Useful Errors

export interface AlreadyInUseErrorMessageProps extends ErrorMessageProps {
    entityName: string;
    inUse: string[];
}
export interface ArgumentErrorMessageProps extends ErrorMessageProps {
    paramName?: string;
}
export interface ArgumentNullErrorMessageProps extends ArgumentErrorMessageProps {}
export interface ArgumentOutOfRangeMessageProps extends ArgumentErrorMessageProps {
    actualValue?: string;
}
export interface AuthenticationErrorMessageProps extends ErrorMessageProps {}
export interface AuthenticationRequiredErrorMessageProps extends AuthenticationErrorMessageProps {}
export interface ConnectionErrorMessageProps extends ErrorMessageProps {}
export interface InvalidOperationErrorMessageProps extends ErrorMessageProps {}
export interface NotFoundErrorMessageProps extends ErrorMessageProps {
    entityName?: string;
}
export interface NotImplementedErrorMessageProps extends ErrorMessageProps {}
export interface NotPermittedErrorMessageProps extends ErrorMessageProps {}
export interface NotSupportedErrorMessageProps extends ErrorMessageProps {}
export interface OutOfMemoryErrorMessageProps extends ErrorMessageProps {}
export interface StackOverflowErrorMessageProps extends ErrorMessageProps {}
export interface TimeoutErrorMessageProps extends ErrorMessageProps {}

// Data

export interface DataErrorMessageProps extends ErrorMessageProps {}
export interface TransactionErrorMessageProps extends DataErrorMessageProps {}

// IO

export interface IOErrorMessageProps extends ErrorMessageProps {}
export interface DirectoryNotFoundErrorMessageProps extends IOErrorMessageProps {}
export interface DriveNotFoundErrorMessageProps extends IOErrorMessageProps {}
export interface EndOfStreamErrorMessageProps extends IOErrorMessageProps {}
export interface FileLoadErrorMessageProps extends IOErrorMessageProps {
    fileName?: string;
}
export interface FileNotFoundErrorMessageProps extends IOErrorMessageProps {
    fileName?: string;
}
export interface PathTooLongErrorMessageProps extends IOErrorMessageProps {}
export interface SocketErrorMessageProps extends IOErrorMessageProps {}
