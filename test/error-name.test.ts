import * as errors from '../src';

describe('Native-Errors-Pro', () => {
    /* eslint-disable @typescript-eslint/naming-convention */
    const ErrorPro = 'ErrorPro';
    const RangeErrorPro = 'RangeErrorPro';
    const ReferenceErrorPro = 'ReferenceErrorPro';
    const SyntaxErrorPro = 'SyntaxErrorPro';
    const TypeErrorPro = 'TypeErrorPro';
    const URIErrorPro = 'URIErrorPro';
    /* eslint-enable @typescript-eslint/naming-convention */

    test(ErrorPro, () => {
        const err1 = new errors[ErrorPro]();
        const err2 = new errors[ErrorPro]('error');
        const err3 = new errors[ErrorPro]('error', err2);
        expect(err1.name).toBe(ErrorPro);
        expect(err2.name).toBe(ErrorPro);
        expect(err3.name).toBe(ErrorPro);
    });

    test(RangeErrorPro, () => {
        const err1 = new errors[RangeErrorPro]();
        const err2 = new errors[RangeErrorPro]('error');
        const err3 = new errors[RangeErrorPro]('error', err2);
        expect(err1.name).toBe(RangeErrorPro);
        expect(err2.name).toBe(RangeErrorPro);
        expect(err3.name).toBe(RangeErrorPro);
    });

    test(ReferenceErrorPro, () => {
        const err1 = new errors[ReferenceErrorPro]();
        const err2 = new errors[ReferenceErrorPro]('error');
        const err3 = new errors[ReferenceErrorPro]('error', err2);
        expect(err1.name).toBe(ReferenceErrorPro);
        expect(err2.name).toBe(ReferenceErrorPro);
        expect(err3.name).toBe(ReferenceErrorPro);
    });

    test(SyntaxErrorPro, () => {
        const err1 = new errors[SyntaxErrorPro]();
        const err2 = new errors[SyntaxErrorPro]('error');
        const err3 = new errors[SyntaxErrorPro]('error', err2);
        expect(err1.name).toBe(SyntaxErrorPro);
        expect(err2.name).toBe(SyntaxErrorPro);
        expect(err3.name).toBe(SyntaxErrorPro);
    });

    test(TypeErrorPro, () => {
        const err1 = new errors[TypeErrorPro]();
        const err2 = new errors[TypeErrorPro]('error');
        const err3 = new errors[TypeErrorPro]('error', err2);
        expect(err1.name).toBe(TypeErrorPro);
        expect(err2.name).toBe(TypeErrorPro);
        expect(err3.name).toBe(TypeErrorPro);
    });

    test(URIErrorPro, () => {
        const err1 = new errors[URIErrorPro]();
        const err2 = new errors[URIErrorPro]('error');
        const err3 = new errors[URIErrorPro]('error', err2);
        expect(err1.name).toBe(URIErrorPro);
        expect(err2.name).toBe(URIErrorPro);
        expect(err3.name).toBe(URIErrorPro);
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
        expect(err1.name).toBe(AlreadyInUseError);
        expect(err2.name).toBe(AlreadyInUseError);
        expect(err3.name).toBe(AlreadyInUseError);
        expect(err4.name).toBe(AlreadyInUseError);
        expect(err5.name).toBe(AlreadyInUseError);
    });

    test(ArgumentError, () => {
        const err1 = new errors[ArgumentError]();
        const err2 = new errors[ArgumentError]('error');
        const err3 = new errors[ArgumentError]('error', err2);
        const err4 = new errors[ArgumentError]('error', 'parameter');
        const err5 = new errors[ArgumentError]('error', 'parameter', err4);
        expect(err1.name).toBe(ArgumentError);
        expect(err2.name).toBe(ArgumentError);
        expect(err3.name).toBe(ArgumentError);
        expect(err4.name).toBe(ArgumentError);
        expect(err5.name).toBe(ArgumentError);
    });

    test(ArgumentNullError, () => {
        const err1 = new errors[ArgumentNullError]();
        const err2 = new errors[ArgumentNullError]('error');
        const err3 = new errors[ArgumentNullError]('error', err2);
        const err4 = new errors[ArgumentNullError]('error', 'parameter');
        const err5 = new errors[ArgumentNullError]('error', 'parameter', err4);
        expect(err1.name).toBe(ArgumentNullError);
        expect(err2.name).toBe(ArgumentNullError);
        expect(err3.name).toBe(ArgumentNullError);
        expect(err4.name).toBe(ArgumentNullError);
        expect(err5.name).toBe(ArgumentNullError);
    });

    test(ArgumentOutOfRangeError, () => {
        const err1 = new errors[ArgumentOutOfRangeError]();
        const err2 = new errors[ArgumentOutOfRangeError]('error');
        const err3 = new errors[ArgumentOutOfRangeError]('error', err2);
        const err4 = new errors[ArgumentOutOfRangeError]('error', 'parameter');
        const err5 = new errors[ArgumentOutOfRangeError]('error', 'parameter', err4);
        const err6 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value');
        const err7 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value', err5);
        expect(err1.name).toBe(ArgumentOutOfRangeError);
        expect(err2.name).toBe(ArgumentOutOfRangeError);
        expect(err3.name).toBe(ArgumentOutOfRangeError);
        expect(err4.name).toBe(ArgumentOutOfRangeError);
        expect(err5.name).toBe(ArgumentOutOfRangeError);
        expect(err6.name).toBe(ArgumentOutOfRangeError);
        expect(err7.name).toBe(ArgumentOutOfRangeError);
    });

    test(AuthenticationError, () => {
        const err1 = new errors[AuthenticationError]();
        const err2 = new errors[AuthenticationError]('error');
        const err3 = new errors[AuthenticationError]('error', err2);
        expect(err1.name).toBe(AuthenticationError);
        expect(err2.name).toBe(AuthenticationError);
        expect(err3.name).toBe(AuthenticationError);
    });

    test(AuthenticationRequiredError, () => {
        const err1 = new errors[AuthenticationRequiredError]();
        const err2 = new errors[AuthenticationRequiredError]('error');
        const err3 = new errors[AuthenticationRequiredError]('error', err2);
        expect(err1.name).toBe(AuthenticationRequiredError);
        expect(err2.name).toBe(AuthenticationRequiredError);
        expect(err3.name).toBe(AuthenticationRequiredError);
    });

    test(ConnectionError, () => {
        const err1 = new errors[ConnectionError]();
        const err2 = new errors[ConnectionError]('error');
        const err3 = new errors[ConnectionError]('error', err2);
        expect(err1.name).toBe(ConnectionError);
        expect(err2.name).toBe(ConnectionError);
        expect(err3.name).toBe(ConnectionError);
    });

    test(DataError, () => {
        const err1 = new errors[DataError]();
        const err2 = new errors[DataError]('error');
        const err3 = new errors[DataError]('error', err2);
        expect(err1.name).toBe(DataError);
        expect(err2.name).toBe(DataError);
        expect(err3.name).toBe(DataError);
    });

    test(DirectoryNotFoundError, () => {
        const err1 = new errors[DirectoryNotFoundError]();
        const err2 = new errors[DirectoryNotFoundError]('error');
        const err3 = new errors[DirectoryNotFoundError]('error', err2);
        expect(err1.name).toBe(DirectoryNotFoundError);
        expect(err2.name).toBe(DirectoryNotFoundError);
        expect(err3.name).toBe(DirectoryNotFoundError);
    });

    test(DriveNotFoundError, () => {
        const err1 = new errors[DriveNotFoundError]();
        const err2 = new errors[DriveNotFoundError]('error');
        const err3 = new errors[DriveNotFoundError]('error', err2);
        expect(err1.name).toBe(DriveNotFoundError);
        expect(err2.name).toBe(DriveNotFoundError);
        expect(err3.name).toBe(DriveNotFoundError);
    });

    test(EndOfStreamError, () => {
        const err1 = new errors[EndOfStreamError]();
        const err2 = new errors[EndOfStreamError]('error');
        const err3 = new errors[EndOfStreamError]('error', err2);
        expect(err1.name).toBe(EndOfStreamError);
        expect(err2.name).toBe(EndOfStreamError);
        expect(err3.name).toBe(EndOfStreamError);
    });

    test(FileLoadError, () => {
        const err1 = new errors[FileLoadError]();
        const err2 = new errors[FileLoadError]('error');
        const err3 = new errors[FileLoadError]('error', err2);
        const err4 = new errors[FileLoadError]('error', 'file1.txt');
        const err5 = new errors[FileLoadError]('error', 'file2.txt', err4);
        expect(err1.name).toBe(FileLoadError);
        expect(err2.name).toBe(FileLoadError);
        expect(err3.name).toBe(FileLoadError);
        expect(err4.name).toBe(FileLoadError);
        expect(err5.name).toBe(FileLoadError);
    });

    test(FileNotFoundError, () => {
        const err1 = new errors[FileNotFoundError]();
        const err2 = new errors[FileNotFoundError]('error');
        const err3 = new errors[FileNotFoundError]('error', err2);
        const err4 = new errors[FileNotFoundError]('error', 'file3.txt');
        const err5 = new errors[FileNotFoundError]('error', 'file4.txt', err4);
        expect(err1.name).toBe(FileNotFoundError);
        expect(err2.name).toBe(FileNotFoundError);
        expect(err3.name).toBe(FileNotFoundError);
        expect(err4.name).toBe(FileNotFoundError);
        expect(err5.name).toBe(FileNotFoundError);
    });

    test(IndexOutOfRangeError, () => {
        const err1 = new errors[IndexOutOfRangeError]();
        const err2 = new errors[IndexOutOfRangeError]('error');
        const err3 = new errors[IndexOutOfRangeError]('error', err2);
        expect(err1.name).toBe(IndexOutOfRangeError);
        expect(err2.name).toBe(IndexOutOfRangeError);
        expect(err3.name).toBe(IndexOutOfRangeError);
    });

    test(InvalidOperationError, () => {
        const err1 = new errors[InvalidOperationError]();
        const err2 = new errors[InvalidOperationError]('error');
        const err3 = new errors[InvalidOperationError]('error', err2);
        expect(err1.name).toBe(InvalidOperationError);
        expect(err2.name).toBe(InvalidOperationError);
        expect(err3.name).toBe(InvalidOperationError);
    });

    test(IOError, () => {
        const err1 = new errors[IOError]();
        const err2 = new errors[IOError]('error');
        const err3 = new errors[IOError]('error', err2);
        expect(err1.name).toBe(IOError);
        expect(err2.name).toBe(IOError);
        expect(err3.name).toBe(IOError);
    });

    test(NotFoundError, () => {
        const err1 = new errors[NotFoundError]();
        const err2 = new errors[NotFoundError]('error');
        const err3 = new errors[NotFoundError]('error', err2);
        const err4 = new errors[NotFoundError]('error', 'args');
        const err5 = new errors[NotFoundError]('error', 'args', err4);
        expect(err1.name).toBe(NotFoundError);
        expect(err2.name).toBe(NotFoundError);
        expect(err3.name).toBe(NotFoundError);
        expect(err4.name).toBe(NotFoundError);
        expect(err5.name).toBe(NotFoundError);
    });

    test(NotImplementedError, () => {
        const err1 = new errors[NotImplementedError]();
        const err2 = new errors[NotImplementedError]('error');
        const err3 = new errors[NotImplementedError]('error', err2);
        expect(err1.name).toBe(NotImplementedError);
        expect(err2.name).toBe(NotImplementedError);
        expect(err3.name).toBe(NotImplementedError);
    });

    test(NotPermittedError, () => {
        const err1 = new errors[NotPermittedError]();
        const err2 = new errors[NotPermittedError]('error');
        const err3 = new errors[NotPermittedError]('error', err2);
        expect(err1.name).toBe(NotPermittedError);
        expect(err2.name).toBe(NotPermittedError);
        expect(err3.name).toBe(NotPermittedError);
    });

    test(NotSupportedError, () => {
        const err1 = new errors[NotSupportedError]();
        const err2 = new errors[NotSupportedError]('error');
        const err3 = new errors[NotSupportedError]('error', err2);
        expect(err1.name).toBe(NotSupportedError);
        expect(err2.name).toBe(NotSupportedError);
        expect(err3.name).toBe(NotSupportedError);
    });

    test(OperationCanceledError, () => {
        const err1 = new errors[OperationCanceledError]();
        const err2 = new errors[OperationCanceledError]('error');
        const err3 = new errors[OperationCanceledError]('error', err2);
        expect(err1.name).toBe(OperationCanceledError);
        expect(err2.name).toBe(OperationCanceledError);
        expect(err3.name).toBe(OperationCanceledError);
    });

    test(OutOfMemoryError, () => {
        const err1 = new errors[OutOfMemoryError]();
        const err2 = new errors[OutOfMemoryError]('error');
        const err3 = new errors[OutOfMemoryError]('error', err2);
        expect(err1.name).toBe(OutOfMemoryError);
        expect(err2.name).toBe(OutOfMemoryError);
        expect(err3.name).toBe(OutOfMemoryError);
    });

    test(PathTooLongError, () => {
        const err1 = new errors[PathTooLongError]();
        const err2 = new errors[PathTooLongError]('error');
        const err3 = new errors[PathTooLongError]('error', err2);
        expect(err1.name).toBe(PathTooLongError);
        expect(err2.name).toBe(PathTooLongError);
        expect(err3.name).toBe(PathTooLongError);
    });

    test(SocketError, () => {
        const err1 = new errors[SocketError]();
        const err2 = new errors[SocketError]('error');
        const err3 = new errors[SocketError]('error', err2);
        expect(err1.name).toBe(SocketError);
        expect(err2.name).toBe(SocketError);
        expect(err3.name).toBe(SocketError);
    });

    test(StackOverflowError, () => {
        const err1 = new errors[StackOverflowError]();
        const err2 = new errors[StackOverflowError]('error');
        const err3 = new errors[StackOverflowError]('error', err2);
        expect(err1.name).toBe(StackOverflowError);
        expect(err2.name).toBe(StackOverflowError);
        expect(err3.name).toBe(StackOverflowError);
    });

    test(TransactionError, () => {
        const err1 = new errors[TransactionError]();
        const err2 = new errors[TransactionError]('error');
        const err3 = new errors[TransactionError]('error', err2);
        expect(err1.name).toBe(TransactionError);
        expect(err2.name).toBe(TransactionError);
        expect(err3.name).toBe(TransactionError);
    });

    test(TimeoutError, () => {
        const err1 = new errors[TimeoutError]();
        const err2 = new errors[TimeoutError]('error');
        const err3 = new errors[TimeoutError]('error', err2);
        expect(err1.name).toBe(TimeoutError);
        expect(err2.name).toBe(TimeoutError);
        expect(err3.name).toBe(TimeoutError);
    });

    test(UnauthorizedAccessError, () => {
        const err1 = new errors[UnauthorizedAccessError]();
        const err2 = new errors[UnauthorizedAccessError]('error');
        const err3 = new errors[UnauthorizedAccessError]('error', err2);
        expect(err1.name).toBe(UnauthorizedAccessError);
        expect(err2.name).toBe(UnauthorizedAccessError);
        expect(err3.name).toBe(UnauthorizedAccessError);
    });

    test(UnauthorizedError, () => {
        const err1 = new errors[UnauthorizedError]();
        const err2 = new errors[UnauthorizedError]('error');
        const err3 = new errors[UnauthorizedError]('error', err2);
        expect(err1.name).toBe(UnauthorizedError);
        expect(err2.name).toBe(UnauthorizedError);
        expect(err3.name).toBe(UnauthorizedError);
    });
});
