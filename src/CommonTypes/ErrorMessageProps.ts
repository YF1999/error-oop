// Node

export interface ErrorMessageProps {
    name: string;
    message: string;
}
export interface RangeErrorMessageProps extends ErrorMessageProps {}
export interface ReferenceErrorMessageProps extends ErrorMessageProps {}

// Error

export interface AlreadyInUseErrorMessageProps extends ErrorMessageProps {
    entityName: string;
    inUse: string[];
}
export interface ConnectionErrorMessageProps extends ErrorMessageProps {}
export interface InvalidOperationErrorMessageProps extends ErrorMessageProps {}
export interface NotFoundErrorMessageProps extends ErrorMessageProps {
    entityName?: string;
}
export interface NotImplementedErrorMessageProps extends ErrorMessageProps {}
export interface NotPermittedErrorMessageProps extends ErrorMessageProps {}
export interface NotSupportedErrorMessageProps extends ErrorMessageProps {}
export interface OutOfMemoryErrorMessageProps extends ErrorMessageProps {}

// Error.Argument

export interface ArgumentErrorMessageProps extends ErrorMessageProps {
    paramName?: string;
}
export interface ArgumentNullErrorMessageProps extends ArgumentErrorMessageProps {}
export interface ArgumentOutOfRangeMessageProps extends ArgumentErrorMessageProps {
    actualValue?: string;
}

// Error.Authentication

export interface AuthenticationErrorMessageProps extends ErrorMessageProps {}
export interface AuthenticationRequiredErrorMessageProps extends ErrorMessageProps {}

// Error.IO

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
