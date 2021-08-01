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
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(RangeErrorPro, () => {
        const err1 = new errors[RangeErrorPro]();
        const err2 = new errors[RangeErrorPro]('error');
        const err3 = new errors[RangeErrorPro]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(ReferenceErrorPro, () => {
        const err1 = new errors[ReferenceErrorPro]();
        const err2 = new errors[ReferenceErrorPro]('error');
        const err3 = new errors[ReferenceErrorPro]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(SyntaxErrorPro, () => {
        const err1 = new errors[SyntaxErrorPro]();
        const err2 = new errors[SyntaxErrorPro]('error');
        const err3 = new errors[SyntaxErrorPro]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(TypeErrorPro, () => {
        const err1 = new errors[TypeErrorPro]();
        const err2 = new errors[TypeErrorPro]('error');
        const err3 = new errors[TypeErrorPro]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(URIErrorPro, () => {
        const err1 = new errors[URIErrorPro]();
        const err2 = new errors[URIErrorPro]('error');
        const err3 = new errors[URIErrorPro]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
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
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(ArgumentError, () => {
        const err1 = new errors[ArgumentError]();
        const err2 = new errors[ArgumentError]('error');
        const err3 = new errors[ArgumentError]('error', err2);
        const err4 = new errors[ArgumentError]('error', 'parameter');
        const err5 = new errors[ArgumentError]('error', 'parameter', err4);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(ArgumentNullError, () => {
        const err1 = new errors[ArgumentNullError]();
        const err2 = new errors[ArgumentNullError]('error');
        const err3 = new errors[ArgumentNullError]('error', err2);
        const err4 = new errors[ArgumentNullError]('error', 'parameter');
        const err5 = new errors[ArgumentNullError]('error', 'parameter', err4);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(ArgumentOutOfRangeError, () => {
        const err1 = new errors[ArgumentOutOfRangeError]();
        const err2 = new errors[ArgumentOutOfRangeError]('error');
        const err3 = new errors[ArgumentOutOfRangeError]('error', err2);
        const err4 = new errors[ArgumentOutOfRangeError]('error', 'parameter');
        const err5 = new errors[ArgumentOutOfRangeError]('error', 'parameter', err4);
        const err6 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value');
        const err7 = new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value', err5);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
        expect(Object.keys(err6).length).toBe(0);
        expect(Object.keys(err7).length).toBe(0);
    });

    test(AuthenticationError, () => {
        const err1 = new errors[AuthenticationError]();
        const err2 = new errors[AuthenticationError]('error');
        const err3 = new errors[AuthenticationError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(AuthenticationRequiredError, () => {
        const err1 = new errors[AuthenticationRequiredError]();
        const err2 = new errors[AuthenticationRequiredError]('error');
        const err3 = new errors[AuthenticationRequiredError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(ConnectionError, () => {
        const err1 = new errors[ConnectionError]();
        const err2 = new errors[ConnectionError]('error');
        const err3 = new errors[ConnectionError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(DataError, () => {
        const err1 = new errors[DataError]();
        const err2 = new errors[DataError]('error');
        const err3 = new errors[DataError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(DirectoryNotFoundError, () => {
        const err1 = new errors[DirectoryNotFoundError]();
        const err2 = new errors[DirectoryNotFoundError]('error');
        const err3 = new errors[DirectoryNotFoundError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(DriveNotFoundError, () => {
        const err1 = new errors[DriveNotFoundError]();
        const err2 = new errors[DriveNotFoundError]('error');
        const err3 = new errors[DriveNotFoundError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(EndOfStreamError, () => {
        const err1 = new errors[EndOfStreamError]();
        const err2 = new errors[EndOfStreamError]('error');
        const err3 = new errors[EndOfStreamError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(FileLoadError, () => {
        const err1 = new errors[FileLoadError]();
        const err2 = new errors[FileLoadError]('error');
        const err3 = new errors[FileLoadError]('error', err2);
        const err4 = new errors[FileLoadError]('error', 'file1.txt');
        const err5 = new errors[FileLoadError]('error', 'file2.txt', err4);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(FileNotFoundError, () => {
        const err1 = new errors[FileNotFoundError]();
        const err2 = new errors[FileNotFoundError]('error');
        const err3 = new errors[FileNotFoundError]('error', err2);
        const err4 = new errors[FileNotFoundError]('error', 'file3.txt');
        const err5 = new errors[FileNotFoundError]('error', 'file4.txt', err4);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(IndexOutOfRangeError, () => {
        const err1 = new errors[IndexOutOfRangeError]();
        const err2 = new errors[IndexOutOfRangeError]('error');
        const err3 = new errors[IndexOutOfRangeError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(InvalidOperationError, () => {
        const err1 = new errors[InvalidOperationError]();
        const err2 = new errors[InvalidOperationError]('error');
        const err3 = new errors[InvalidOperationError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(IOError, () => {
        const err1 = new errors[IOError]();
        const err2 = new errors[IOError]('error');
        const err3 = new errors[IOError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(NotFoundError, () => {
        const err1 = new errors[NotFoundError]();
        const err2 = new errors[NotFoundError]('error');
        const err3 = new errors[NotFoundError]('error', err2);
        const err4 = new errors[NotFoundError]('error', 'args');
        const err5 = new errors[NotFoundError]('error', 'args', err4);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test(NotImplementedError, () => {
        const err1 = new errors[NotImplementedError]();
        const err2 = new errors[NotImplementedError]('error');
        const err3 = new errors[NotImplementedError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(NotPermittedError, () => {
        const err1 = new errors[NotPermittedError]();
        const err2 = new errors[NotPermittedError]('error');
        const err3 = new errors[NotPermittedError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(NotSupportedError, () => {
        const err1 = new errors[NotSupportedError]();
        const err2 = new errors[NotSupportedError]('error');
        const err3 = new errors[NotSupportedError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(OperationCanceledError, () => {
        const err1 = new errors[OperationCanceledError]();
        const err2 = new errors[OperationCanceledError]('error');
        const err3 = new errors[OperationCanceledError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(OutOfMemoryError, () => {
        const err1 = new errors[OutOfMemoryError]();
        const err2 = new errors[OutOfMemoryError]('error');
        const err3 = new errors[OutOfMemoryError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(PathTooLongError, () => {
        const err1 = new errors[PathTooLongError]();
        const err2 = new errors[PathTooLongError]('error');
        const err3 = new errors[PathTooLongError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(SocketError, () => {
        const err1 = new errors[SocketError]();
        const err2 = new errors[SocketError]('error');
        const err3 = new errors[SocketError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(StackOverflowError, () => {
        const err1 = new errors[StackOverflowError]();
        const err2 = new errors[StackOverflowError]('error');
        const err3 = new errors[StackOverflowError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(TransactionError, () => {
        const err1 = new errors[TransactionError]();
        const err2 = new errors[TransactionError]('error');
        const err3 = new errors[TransactionError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(TimeoutError, () => {
        const err1 = new errors[TimeoutError]();
        const err2 = new errors[TimeoutError]('error');
        const err3 = new errors[TimeoutError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(UnauthorizedAccessError, () => {
        const err1 = new errors[UnauthorizedAccessError]();
        const err2 = new errors[UnauthorizedAccessError]('error');
        const err3 = new errors[UnauthorizedAccessError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test(UnauthorizedError, () => {
        const err1 = new errors[UnauthorizedError]();
        const err2 = new errors[UnauthorizedError]('error');
        const err3 = new errors[UnauthorizedError]('error', err2);
        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });
});
