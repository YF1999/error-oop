import {
    NativeError,
    NativeRangeError,
    NativeReferenceError,
    NativeSyntaxError,
    NativeTypeError,
    NativeURIError,
} from '../Native';

import { ArgumentError, ArgumentNullError, ArgumentOutOfRangeError } from '../Argument';
import { AuthenticationError, AuthenticationRequiredError } from '../Authentication';
import { DataError, TransactionError } from '../Data';
import {
    DirectoryNotFoundError,
    DriveNotFoundError,
    EndOfStreamError,
    FileLoadError,
    FileNotFoundError,
    IOError,
    PathTooLongError,
    SocketError,
} from '../IO';
import { UnauthorizedAccessError, UnauthorizedError } from '../Unauthorized';

import { AlreadyInUseError } from '../AlreadyInUseError';
import { ConnectionError } from '../ConnectionError';
import { IndexOutOfRangeError } from '../IndexOutOfRangeError';
import { InvalidOperationError } from '../InvalidOperationError';
import { InvalidDataError } from '../InvalidDataError';
import { NotFoundError } from '../NotFoundError';
import { NotImplementedError } from '../NotImplementedError';
import { NotPermittedError } from '../NotPermittedError';
import { NotSupportedError } from '../NotSupportedError';
import { OperationCanceledError } from '../OperationCanceledError';
import { OutOfMemoryError } from '../OutOfMemoryError';
import { StackOverflowError } from '../StackOverflowError';
import { TimeoutError } from '../TimeoutError';

import { ErrorName } from './ErrorName';
import { InternalErrorTool } from '../InternalTools';

interface IErrorNameToError {
    /* eslint-disable @typescript-eslint/naming-convention */
    NativeError: NativeError;
    NativeRangeError: NativeRangeError;
    NativeReferenceError: NativeReferenceError;
    NativeSyntaxError: NativeSyntaxError;
    NativeTypeError: NativeTypeError;
    NativeURIError: NativeURIError;

    AlreadyInUseError: AlreadyInUseError;
    ArgumentError: ArgumentError;
    ArgumentNullError: ArgumentNullError;
    ArgumentOutOfRangeError: ArgumentOutOfRangeError;
    AuthenticationError: AuthenticationError;
    AuthenticationRequiredError: AuthenticationRequiredError;
    ConnectionError: ConnectionError;
    DataError: DataError;
    DirectoryNotFoundError: DirectoryNotFoundError;
    DriveNotFoundError: DriveNotFoundError;
    EndOfStreamError: EndOfStreamError;
    FileLoadError: FileLoadError;
    FileNotFoundError: FileNotFoundError;
    IndexOutOfRangeError: IndexOutOfRangeError;
    InvalidDataError: InvalidDataError;
    InvalidOperationError: InvalidOperationError;
    IOError: IOError;
    NotFoundError: NotFoundError;
    NotImplementedError: NotImplementedError;
    NotPermittedError: NotPermittedError;
    NotSupportedError: NotSupportedError;
    OperationCanceledError: OperationCanceledError;
    OutOfMemoryError: OutOfMemoryError;
    PathTooLongError: PathTooLongError;
    SocketError: SocketError;
    StackOverflowError: StackOverflowError;
    TimeoutError: TimeoutError;
    TransactionError: TransactionError;
    UnauthorizedAccessError: UnauthorizedAccessError;
    UnauthorizedError: UnauthorizedError;
    /* eslint-enable @typescript-eslint/naming-convention */
}

export class ErrorTool {
    /**
     * message: string?[, arg1: T1?[, arg2: T2?[, ..., argn: Tn?]]], innerError: Error?
     */
    public static parseErrorArguments = InternalErrorTool.parseErrorArguments;

    private static nameToError = {
        /* eslint-disable @typescript-eslint/naming-convention */
        NativeError,
        NativeRangeError,
        NativeReferenceError,
        NativeSyntaxError,
        NativeTypeError,
        NativeURIError,

        AlreadyInUseError,
        ArgumentError,
        ArgumentNullError,
        ArgumentOutOfRangeError,
        AuthenticationError,
        AuthenticationRequiredError,
        ConnectionError,
        DataError,
        DirectoryNotFoundError,
        DriveNotFoundError,
        EndOfStreamError,
        FileLoadError,
        FileNotFoundError,
        IndexOutOfRangeError,
        InvalidDataError,
        InvalidOperationError,
        IOError,
        NotFoundError,
        NotImplementedError,
        NotPermittedError,
        NotSupportedError,
        OperationCanceledError,
        OutOfMemoryError,
        PathTooLongError,
        SocketError,
        StackOverflowError,
        TimeoutError,
        TransactionError,
        UnauthorizedAccessError,
        UnauthorizedError,
        /* eslint-enable @typescript-eslint/naming-convention */
    };

    public static is<E extends ErrorName>(error: unknown, name: E): error is IErrorNameToError[E] {
        return error instanceof ErrorTool.nameToError[name];
    }
}
