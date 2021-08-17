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

describe('Test `ErrorName`', () => {
    test('test native errors', () => {
        expect(ErrorName.NativeError).toBe(NativeError.name);
        expect(ErrorName.NativeRangeError).toBe(NativeRangeError.name);
        expect(ErrorName.NativeReferenceError).toBe(NativeReferenceError.name);
        expect(ErrorName.NativeSyntaxError).toBe(NativeSyntaxError.name);
        expect(ErrorName.NativeTypeError).toBe(NativeTypeError.name);
        expect(ErrorName.NativeURIError).toBe(NativeURIError.name);
    });

    test('test other oop errors', () => {
        expect(ErrorName.AlreadyInUseError).toBe(AlreadyInUseError.name);
        expect(ErrorName.ArgumentError).toBe(ArgumentError.name);
        expect(ErrorName.ArgumentNullError).toBe(ArgumentNullError.name);
        expect(ErrorName.ArgumentOutOfRangeError).toBe(ArgumentOutOfRangeError.name);
        expect(ErrorName.AuthenticationError).toBe(AuthenticationError.name);
        expect(ErrorName.AuthenticationRequiredError).toBe(AuthenticationRequiredError.name);
        expect(ErrorName.ConnectionError).toBe(ConnectionError.name);
        expect(ErrorName.DataError).toBe(DataError.name);
        expect(ErrorName.DirectoryNotFoundError).toBe(DirectoryNotFoundError.name);
        expect(ErrorName.DriveNotFoundError).toBe(DriveNotFoundError.name);
        expect(ErrorName.EndOfStreamError).toBe(EndOfStreamError.name);
        expect(ErrorName.FileLoadError).toBe(FileLoadError.name);
        expect(ErrorName.FileNotFoundError).toBe(FileNotFoundError.name);
        expect(ErrorName.IndexOutOfRangeError).toBe(IndexOutOfRangeError.name);
        expect(ErrorName.InvalidOperationError).toBe(InvalidOperationError.name);
        expect(ErrorName.InvalidDataError).toBe(InvalidDataError.name);
        expect(ErrorName.IOError).toBe(IOError.name);
        expect(ErrorName.NotFoundError).toBe(NotFoundError.name);
        expect(ErrorName.NotImplementedError).toBe(NotImplementedError.name);
        expect(ErrorName.NotPermittedError).toBe(NotPermittedError.name);
        expect(ErrorName.NotSupportedError).toBe(NotSupportedError.name);
        expect(ErrorName.OperationCanceledError).toBe(OperationCanceledError.name);
        expect(ErrorName.OutOfMemoryError).toBe(OutOfMemoryError.name);
        expect(ErrorName.PathTooLongError).toBe(PathTooLongError.name);
        expect(ErrorName.StackOverflowError).toBe(StackOverflowError.name);
        expect(ErrorName.SocketError).toBe(SocketError.name);
        expect(ErrorName.TimeoutError).toBe(TimeoutError.name);
        expect(ErrorName.TransactionError).toBe(TransactionError.name);
        expect(ErrorName.UnauthorizedAccessError).toBe(UnauthorizedAccessError.name);
        expect(ErrorName.UnauthorizedError).toBe(UnauthorizedError.name);
    });
});
