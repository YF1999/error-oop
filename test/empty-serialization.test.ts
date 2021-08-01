import * as errors from '../src';

describe('Native-Errors-Pro', () => {
    /* eslint-disable @typescript-eslint/naming-convention */
    const NativeError = 'NativeError';
    const NativeRangeError = 'NativeRangeError';
    const NativeReferenceError = 'NativeReferenceError';
    const NativeSyntaxError = 'NativeSyntaxError';
    const NativeTypeError = 'NativeTypeError';
    const NativeURIError = 'NativeURIError';
    /* eslint-enable @typescript-eslint/naming-convention */

    test(NativeError, () => {
        const err1 = new errors[NativeError]();
        const err2 = new errors[NativeError]('error');
        const err3 = new errors[NativeError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NativeRangeError, () => {
        const err1 = new errors[NativeRangeError]();
        const err2 = new errors[NativeRangeError]('error');
        const err3 = new errors[NativeRangeError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NativeReferenceError, () => {
        const err1 = new errors[NativeReferenceError]();
        const err2 = new errors[NativeReferenceError]('error');
        const err3 = new errors[NativeReferenceError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NativeSyntaxError, () => {
        const err1 = new errors[NativeSyntaxError]();
        const err2 = new errors[NativeSyntaxError]('error');
        const err3 = new errors[NativeSyntaxError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NativeTypeError, () => {
        const err1 = new errors[NativeTypeError]();
        const err2 = new errors[NativeTypeError]('error');
        const err3 = new errors[NativeTypeError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NativeURIError, () => {
        const err1 = new errors[NativeURIError]();
        const err2 = new errors[NativeURIError]('error');
        const err3 = new errors[NativeURIError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });
});

describe('More-Useful-Errors', () => {
    /* eslint-disable @typescript-eslint/naming-convention */
    const AlreadyInUseError = 'AlreadyInUseError';
    const ArgumentError = 'ArgumentError';
    const ArgumentNullError = 'ArgumentNullError';
    const ArgumentOutOfRangeError = 'ArgumentOutOfRangeError';
    const AuthenticationError = 'AuthenticationError';
    const AuthenticationRequiredError = 'AuthenticationRequiredError';
    const ConnectionError = 'ConnectionError';
    const DataError = 'DataError';
    const DirectoryNotFoundError = 'DirectoryNotFoundError';
    const DriveNotFoundError = 'DriveNotFoundError';
    const EndOfStreamError = 'EndOfStreamError';
    const FileLoadError = 'FileLoadError';
    const FileNotFoundError = 'FileNotFoundError';
    const IndexOutOfRangeError = 'IndexOutOfRangeError';
    const InvalidOperationError = 'InvalidOperationError';
    const IOError = 'IOError';
    const NotFoundError = 'NotFoundError';
    const NotImplementedError = 'NotImplementedError';
    const NotPermittedError = 'NotPermittedError';
    const NotSupportedError = 'NotSupportedError';
    const OperationCanceledError = 'OperationCanceledError';
    const OutOfMemoryError = 'OutOfMemoryError';
    const PathTooLongError = 'PathTooLongError';
    const SocketError = 'SocketError';
    const StackOverflowError = 'StackOverflowError';
    const TransactionError = 'TransactionError';
    const TimeoutError = 'TimeoutError';
    const UnauthorizedAccessError = 'UnauthorizedAccessError';
    const UnauthorizedError = 'UnauthorizedError';
    /* eslint-enable @typescript-eslint/naming-convention */

    test(AlreadyInUseError, () => {
        const err1 = new errors[AlreadyInUseError]('object');
        const err2 = new errors[AlreadyInUseError]('object', 'obj1');
        const err3 = new errors[AlreadyInUseError]('object', 'obj1', 'obj2');
        const err4 = new errors[AlreadyInUseError]('object', 'obj1', 'obj2', 'obj3');
        const err5 = new errors[AlreadyInUseError]('object', 'obj1', 'obj2', 'obj3', 'obj4');
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(ArgumentError, () => {
        const err1 = new errors[ArgumentError]();
        const err2 = new errors[ArgumentError]('error');
        const err3 = new errors[ArgumentError]('error', err2);
        const err4 = new errors[ArgumentError]('error', 'parameter');
        const err5 = new errors[ArgumentError]('error', 'parameter', err4);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(ArgumentNullError, () => {
        const err1 = new errors[ArgumentNullError]();
        const err2 = new errors[ArgumentNullError]('error');
        const err3 = new errors[ArgumentNullError]('error', err2);
        const err4 = new errors[ArgumentNullError]('error', 'parameter');
        const err5 = new errors[ArgumentNullError]('error', 'parameter', err4);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(ArgumentOutOfRangeError, () => {
        const err1 = new errors[ArgumentOutOfRangeError]();
        const err2 = new errors[ArgumentOutOfRangeError]('error');
        const err3 = new errors[ArgumentOutOfRangeError]('error', err2);
        const err4 = new errors[ArgumentOutOfRangeError]('error', 'parameter');
        const err5 = new errors[ArgumentOutOfRangeError]('error', 'parameter', err4);
        const err6 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value');
        const err7 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value', err5);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
        expect(JSON.stringify(err6)).toBe('{}');
        expect(JSON.stringify(err7)).toBe('{}');
    });

    test(AuthenticationError, () => {
        const err1 = new errors[AuthenticationError]();
        const err2 = new errors[AuthenticationError]('error');
        const err3 = new errors[AuthenticationError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(AuthenticationRequiredError, () => {
        const err1 = new errors[AuthenticationRequiredError]();
        const err2 = new errors[AuthenticationRequiredError]('error');
        const err3 = new errors[AuthenticationRequiredError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(ConnectionError, () => {
        const err1 = new errors[ConnectionError]();
        const err2 = new errors[ConnectionError]('error');
        const err3 = new errors[ConnectionError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(DataError, () => {
        const err1 = new errors[DataError]();
        const err2 = new errors[DataError]('error');
        const err3 = new errors[DataError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(DirectoryNotFoundError, () => {
        const err1 = new errors[DirectoryNotFoundError]();
        const err2 = new errors[DirectoryNotFoundError]('error');
        const err3 = new errors[DirectoryNotFoundError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(DriveNotFoundError, () => {
        const err1 = new errors[DriveNotFoundError]();
        const err2 = new errors[DriveNotFoundError]('error');
        const err3 = new errors[DriveNotFoundError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(EndOfStreamError, () => {
        const err1 = new errors[EndOfStreamError]();
        const err2 = new errors[EndOfStreamError]('error');
        const err3 = new errors[EndOfStreamError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(FileLoadError, () => {
        const err1 = new errors[FileLoadError]();
        const err2 = new errors[FileLoadError]('error');
        const err3 = new errors[FileLoadError]('error', err2);
        const err4 = new errors[FileLoadError]('error', 'file1.txt');
        const err5 = new errors[FileLoadError]('error', 'file2.txt', err4);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(FileNotFoundError, () => {
        const err1 = new errors[FileNotFoundError]();
        const err2 = new errors[FileNotFoundError]('error');
        const err3 = new errors[FileNotFoundError]('error', err2);
        const err4 = new errors[FileNotFoundError]('error', 'file3.txt');
        const err5 = new errors[FileNotFoundError]('error', 'file4.txt', err4);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(IndexOutOfRangeError, () => {
        const err1 = new errors[IndexOutOfRangeError]();
        const err2 = new errors[IndexOutOfRangeError]('error');
        const err3 = new errors[IndexOutOfRangeError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(InvalidOperationError, () => {
        const err1 = new errors[InvalidOperationError]();
        const err2 = new errors[InvalidOperationError]('error');
        const err3 = new errors[InvalidOperationError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(IOError, () => {
        const err1 = new errors[IOError]();
        const err2 = new errors[IOError]('error');
        const err3 = new errors[IOError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NotFoundError, () => {
        const err1 = new errors[NotFoundError]();
        const err2 = new errors[NotFoundError]('error');
        const err3 = new errors[NotFoundError]('error', err2);
        const err4 = new errors[NotFoundError]('error', 'args');
        const err5 = new errors[NotFoundError]('error', 'args', err4);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test(NotImplementedError, () => {
        const err1 = new errors[NotImplementedError]();
        const err2 = new errors[NotImplementedError]('error');
        const err3 = new errors[NotImplementedError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NotPermittedError, () => {
        const err1 = new errors[NotPermittedError]();
        const err2 = new errors[NotPermittedError]('error');
        const err3 = new errors[NotPermittedError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(NotSupportedError, () => {
        const err1 = new errors[NotSupportedError]();
        const err2 = new errors[NotSupportedError]('error');
        const err3 = new errors[NotSupportedError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(OperationCanceledError, () => {
        const err1 = new errors[OperationCanceledError]();
        const err2 = new errors[OperationCanceledError]('error');
        const err3 = new errors[OperationCanceledError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(OutOfMemoryError, () => {
        const err1 = new errors[OutOfMemoryError]();
        const err2 = new errors[OutOfMemoryError]('error');
        const err3 = new errors[OutOfMemoryError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(PathTooLongError, () => {
        const err1 = new errors[PathTooLongError]();
        const err2 = new errors[PathTooLongError]('error');
        const err3 = new errors[PathTooLongError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(SocketError, () => {
        const err1 = new errors[SocketError]();
        const err2 = new errors[SocketError]('error');
        const err3 = new errors[SocketError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(StackOverflowError, () => {
        const err1 = new errors[StackOverflowError]();
        const err2 = new errors[StackOverflowError]('error');
        const err3 = new errors[StackOverflowError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(TransactionError, () => {
        const err1 = new errors[TransactionError]();
        const err2 = new errors[TransactionError]('error');
        const err3 = new errors[TransactionError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(TimeoutError, () => {
        const err1 = new errors[TimeoutError]();
        const err2 = new errors[TimeoutError]('error');
        const err3 = new errors[TimeoutError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(UnauthorizedAccessError, () => {
        const err1 = new errors[UnauthorizedAccessError]();
        const err2 = new errors[UnauthorizedAccessError]('error');
        const err3 = new errors[UnauthorizedAccessError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test(UnauthorizedError, () => {
        const err1 = new errors[UnauthorizedError]();
        const err2 = new errors[UnauthorizedError]('error');
        const err3 = new errors[UnauthorizedError]('error', err2);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });
});
