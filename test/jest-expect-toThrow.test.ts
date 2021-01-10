import * as errors from '../src';

import { switches } from './switches';

describe('Native-Errors-Pro', () => {
    if (!switches.jestExpectToThrow.nativeErrorsPro) {
        test.skip('skip', () => {});
        return;
    }

    /* eslint-disable @typescript-eslint/naming-convention */
    const ErrorPro = 'Error';
    const RangeErrorPro = 'RangeError';
    const ReferenceErrorPro = 'ReferenceError';
    const SyntaxErrorPro = 'SyntaxError';
    const TypeErrorPro = 'TypeError';
    const URIErrorPro = 'URIError';
    /* eslint-enable @typescript-eslint/naming-convention */

    test(ErrorPro, () => {
        expect(() => {
            throw new errors[ErrorPro]();
        }).toThrow(errors[ErrorPro]);
    });

    test(RangeErrorPro, () => {
        expect(() => {
            throw new errors[RangeErrorPro]();
        }).toThrow(errors[RangeErrorPro]);
    });

    test(ReferenceErrorPro, () => {
        expect(() => {
            throw new errors[ReferenceErrorPro]();
        }).toThrow(errors[ReferenceErrorPro]);
    });

    test(SyntaxErrorPro, () => {
        expect(() => {
            throw new errors[SyntaxErrorPro]();
        }).toThrow(errors[SyntaxErrorPro]);
    });

    test(TypeErrorPro, () => {
        expect(() => {
            throw new errors[TypeErrorPro]();
        }).toThrow(errors[TypeErrorPro]);
    });

    test(URIErrorPro, () => {
        expect(() => {
            throw new errors[URIErrorPro]();
        }).toThrow(errors[URIErrorPro]);
    });
});

describe('More-Useful-Errors', () => {
    if (!switches.jestExpectToThrow.moreUsefulErrors) {
        test.skip('skip', () => {});
        return;
    }

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
        expect(() => {
            throw new errors[AlreadyInUseError]('entityName');
        }).toThrow(errors[AlreadyInUseError]);
    });

    test(ArgumentError, () => {
        expect(() => {
            throw new errors[ArgumentError]();
        }).toThrow(errors[ArgumentError]);
    });

    test(ArgumentNullError, () => {
        expect(() => {
            throw new errors[ArgumentNullError]();
        }).toThrow(errors[ArgumentNullError]);
    });

    test(ArgumentOutOfRangeError, () => {
        expect(() => {
            throw new errors[ArgumentOutOfRangeError]();
        }).toThrow(errors[ArgumentOutOfRangeError]);
    });

    test(AuthenticationError, () => {
        expect(() => {
            throw new errors[AuthenticationError]();
        }).toThrow(errors[AuthenticationError]);
    });

    test(AuthenticationRequiredError, () => {
        expect(() => {
            throw new errors[AuthenticationRequiredError]();
        }).toThrow(errors[AuthenticationRequiredError]);
    });

    test(ConnectionError, () => {
        expect(() => {
            throw new errors[ConnectionError]();
        }).toThrow(errors[ConnectionError]);
    });

    test(DataError, () => {
        expect(() => {
            throw new errors[DataError]();
        }).toThrow(errors[DataError]);
    });

    test(DirectoryNotFoundError, () => {
        expect(() => {
            throw new errors[DirectoryNotFoundError]();
        }).toThrow(errors[DirectoryNotFoundError]);
    });

    test(DriveNotFoundError, () => {
        expect(() => {
            throw new errors[DriveNotFoundError]();
        }).toThrow(errors[DriveNotFoundError]);
    });

    test(EndOfStreamError, () => {
        expect(() => {
            throw new errors[EndOfStreamError]();
        }).toThrow(errors[EndOfStreamError]);
    });

    test(FileLoadError, () => {
        expect(() => {
            throw new errors[FileLoadError]();
        }).toThrow(errors[FileLoadError]);
    });

    test(FileNotFoundError, () => {
        expect(() => {
            throw new errors[FileNotFoundError]();
        }).toThrow(errors[FileNotFoundError]);
    });

    test(IndexOutOfRangeError, () => {
        expect(() => {
            throw new errors[IndexOutOfRangeError]();
        }).toThrow(errors[IndexOutOfRangeError]);
    });

    test(InvalidOperationError, () => {
        expect(() => {
            throw new errors[InvalidOperationError]();
        }).toThrow(errors[InvalidOperationError]);
    });

    test(IOError, () => {
        expect(() => {
            throw new errors[IOError]();
        }).toThrow(errors[IOError]);
    });

    test(NotFoundError, () => {
        expect(() => {
            throw new errors[NotFoundError]();
        }).toThrow(errors[NotFoundError]);
    });

    test(NotImplementedError, () => {
        expect(() => {
            throw new errors[NotImplementedError]();
        }).toThrow(errors[NotImplementedError]);
    });

    test(NotPermittedError, () => {
        expect(() => {
            throw new errors[NotPermittedError]();
        }).toThrow(errors[NotPermittedError]);
    });

    test(NotSupportedError, () => {
        expect(() => {
            throw new errors[NotSupportedError]();
        }).toThrow(errors[NotSupportedError]);
    });

    test(OperationCanceledError, () => {
        expect(() => {
            throw new errors[OperationCanceledError]();
        }).toThrow(errors[OperationCanceledError]);
    });

    test(OutOfMemoryError, () => {
        expect(() => {
            throw new errors[OutOfMemoryError]();
        }).toThrow(errors[OutOfMemoryError]);
    });

    test(PathTooLongError, () => {
        expect(() => {
            throw new errors[PathTooLongError]();
        }).toThrow(errors[PathTooLongError]);
    });

    test(SocketError, () => {
        expect(() => {
            throw new errors[SocketError]();
        }).toThrow(errors[SocketError]);
    });

    test(StackOverflowError, () => {
        expect(() => {
            throw new errors[StackOverflowError]();
        }).toThrow(errors[StackOverflowError]);
    });

    test(TransactionError, () => {
        expect(() => {
            throw new errors[TransactionError]();
        }).toThrow(errors[TransactionError]);
    });

    test(TimeoutError, () => {
        expect(() => {
            throw new errors[TimeoutError]();
        }).toThrow(errors[TimeoutError]);
    });

    test(UnauthorizedAccessError, () => {
        expect(() => {
            throw new errors[UnauthorizedAccessError]();
        }).toThrow(errors[UnauthorizedAccessError]);
    });

    test(UnauthorizedError, () => {
        expect(() => {
            throw new errors[UnauthorizedError]();
        }).toThrow(errors[UnauthorizedError]);
    });
});
