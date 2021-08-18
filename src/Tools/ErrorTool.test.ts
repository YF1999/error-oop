import {
    IErrorArguments,
    IErrorOptions,
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
import { ErrorTool } from './ErrorTool';

interface IErrorObject extends IErrorOptions {
    a?: string;
    b?: number;
    c?: boolean;
    d?: string;
    e?: string;
}

describe('Test `ErrorTool`', () => {
    test('test `parseErrorArgument`', () => {
        const message = 'error object';
        const innerError = new Error();

        const args: IErrorArguments<IErrorObject, ['a', 'b', 'c', 'd', 'e']>[] = [
            [],
            [{ message }],
            [{ message, a: 'a', b: -1 }],
            [{ a: 'a', c: true, d: 'd', e: 'e' }],
            [message, 'a', -1, innerError],
            [message, 'a', -1, true],
            [message, 'a', -1, false, 'd', 'e', innerError],
        ];
        args.map((arg) => expectSnapshot(ErrorTool.parseErrorArguments(['a', 'b', 'c', 'd', 'e'], ...arg)));
    });

    test('test `is`', () => {
        expect(ErrorTool.is(new NativeError(), ErrorName.NativeError)).toBeTruthy();
        expect(ErrorTool.is(new NativeRangeError(), ErrorName.NativeRangeError)).toBeTruthy();
        expect(ErrorTool.is(new NativeReferenceError(), ErrorName.NativeReferenceError)).toBeTruthy();
        expect(ErrorTool.is(new NativeSyntaxError(), ErrorName.NativeSyntaxError)).toBeTruthy();
        expect(ErrorTool.is(new NativeTypeError(), ErrorName.NativeTypeError)).toBeTruthy();
        expect(ErrorTool.is(new NativeURIError(), ErrorName.NativeURIError)).toBeTruthy();

        expect(ErrorTool.is(new AlreadyInUseError(''), ErrorName.AlreadyInUseError)).toBeTruthy();
        expect(ErrorTool.is(new ArgumentError(), ErrorName.ArgumentError)).toBeTruthy();
        expect(ErrorTool.is(new ArgumentNullError(), ErrorName.ArgumentNullError)).toBeTruthy();
        expect(ErrorTool.is(new ArgumentOutOfRangeError(), ErrorName.ArgumentOutOfRangeError)).toBeTruthy();
        expect(ErrorTool.is(new AuthenticationError(), ErrorName.AuthenticationError)).toBeTruthy();
        expect(ErrorTool.is(new AuthenticationRequiredError(), ErrorName.AuthenticationRequiredError)).toBeTruthy();
        expect(ErrorTool.is(new ConnectionError(), ErrorName.ConnectionError)).toBeTruthy();
        expect(ErrorTool.is(new DataError(), ErrorName.DataError)).toBeTruthy();
        expect(ErrorTool.is(new DirectoryNotFoundError(), ErrorName.DirectoryNotFoundError)).toBeTruthy();
        expect(ErrorTool.is(new DriveNotFoundError(), ErrorName.DriveNotFoundError)).toBeTruthy();
        expect(ErrorTool.is(new EndOfStreamError(), ErrorName.EndOfStreamError)).toBeTruthy();
        expect(ErrorTool.is(new FileLoadError(), ErrorName.FileLoadError)).toBeTruthy();
        expect(ErrorTool.is(new FileNotFoundError(), ErrorName.FileNotFoundError)).toBeTruthy();
        expect(ErrorTool.is(new IndexOutOfRangeError(), ErrorName.IndexOutOfRangeError)).toBeTruthy();
        expect(ErrorTool.is(new InvalidOperationError(), ErrorName.InvalidOperationError)).toBeTruthy();
        expect(ErrorTool.is(new InvalidDataError(), ErrorName.InvalidDataError)).toBeTruthy();
        expect(ErrorTool.is(new IOError(), ErrorName.IOError)).toBeTruthy();
        expect(ErrorTool.is(new NotFoundError(), ErrorName.NotFoundError)).toBeTruthy();
        expect(ErrorTool.is(new NotImplementedError(), ErrorName.NotImplementedError)).toBeTruthy();
        expect(ErrorTool.is(new NotPermittedError(), ErrorName.NotPermittedError)).toBeTruthy();
        expect(ErrorTool.is(new NotSupportedError(), ErrorName.NotSupportedError)).toBeTruthy();
        expect(ErrorTool.is(new OperationCanceledError(), ErrorName.OperationCanceledError)).toBeTruthy();
        expect(ErrorTool.is(new OutOfMemoryError(), ErrorName.OutOfMemoryError)).toBeTruthy();
        expect(ErrorTool.is(new PathTooLongError(), ErrorName.PathTooLongError)).toBeTruthy();
        expect(ErrorTool.is(new StackOverflowError(), ErrorName.StackOverflowError)).toBeTruthy();
        expect(ErrorTool.is(new SocketError(), ErrorName.SocketError)).toBeTruthy();
        expect(ErrorTool.is(new TimeoutError(), ErrorName.TimeoutError)).toBeTruthy();
        expect(ErrorTool.is(new TransactionError(), ErrorName.TransactionError)).toBeTruthy();
        expect(ErrorTool.is(new UnauthorizedAccessError(), ErrorName.UnauthorizedAccessError)).toBeTruthy();
        expect(ErrorTool.is(new UnauthorizedError(), ErrorName.UnauthorizedError)).toBeTruthy();
    });
});
