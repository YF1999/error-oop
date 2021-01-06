import {
    AlreadyInUseError,
    ArgumentError,
    ArgumentNullError,
    ArgumentOutOfRangeError,
    AuthenticationError,
    AuthenticationRequiredError,
    ConnectionError,
    DirectoryNotFoundError,
    DriveNotFoundError,
    EndOfStreamError,
    Error,
    FileLoadError,
    FileNotFoundError,
    InvalidOperationError,
    IOError,
    NotFoundError,
    NotImplementedError,
    NotPermittedError,
    NotSupportedError,
    OutOfMemoryError,
    PathTooLongError,
    RangeError,
    ReferenceError,
    SocketError,
} from '../src';

import { switches } from './switches';

describe('no-enumerable-fields test', () => {
    if (!switches.noEnumerableFields) {
        test.skip('skip', () => {});
        return;
    }

    test('AlreadyInUseError', () => {
        const err1 = new AlreadyInUseError('object');
        const err2 = new AlreadyInUseError('object', 'obj1');
        const err3 = new AlreadyInUseError('object', 'obj1', 'obj2');
        const err4 = new AlreadyInUseError('object', 'obj1', 'obj2', 'obj3');
        const err5 = new AlreadyInUseError('object', 'obj1', 'obj2', 'obj3', 'obj4');

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('Argument.ArgumentError', () => {
        const err1 = new ArgumentError();
        const err2 = new ArgumentError('error');
        const err3 = new ArgumentError('error', err2);
        const err4 = new ArgumentError('error', 'parameter');
        const err5 = new ArgumentError('error', 'parameter', err4);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test('Argument.ArgumentNullError', () => {
        const err1 = new ArgumentNullError();
        const err2 = new ArgumentNullError('error');
        const err3 = new ArgumentNullError('error', err2);
        const err4 = new ArgumentNullError('error', 'parameter');
        const err5 = new ArgumentNullError('error', 'parameter', err4);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test('Argument.ArgumentOutOfRangeError', () => {
        const err1 = new ArgumentOutOfRangeError();
        const err2 = new ArgumentOutOfRangeError('error');
        const err3 = new ArgumentOutOfRangeError('error', err2);
        const err4 = new ArgumentOutOfRangeError('error', 'parameter');
        const err5 = new ArgumentOutOfRangeError('error', 'parameter', err4);
        const err6 = new ArgumentOutOfRangeError('error', 'parameter', 'value');
        const err7 = new ArgumentOutOfRangeError('error', 'parameter', 'value', err5);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
        expect(Object.keys(err6).length).toBe(0);
        expect(Object.keys(err7).length).toBe(0);
    });

    test('Authentication.AuthenticationError', () => {
        const err1 = new AuthenticationError();
        const err2 = new AuthenticationError('error');
        const err3 = new AuthenticationError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('Authentication.AuthenticationRequiredError', () => {
        const err1 = new AuthenticationRequiredError();
        const err2 = new AuthenticationRequiredError('error');
        const err3 = new AuthenticationRequiredError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('ConnectionError', () => {
        const err1 = new ConnectionError();
        const err2 = new ConnectionError('error');
        const err3 = new ConnectionError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('Error', () => {
        const err1 = new Error();
        const err2 = new Error('error');
        const err3 = new Error('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('InvalidOperationError', () => {
        const err1 = new InvalidOperationError();
        const err2 = new InvalidOperationError('error');
        const err3 = new InvalidOperationError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.DirectoryNotFoundError', () => {
        const err1 = new DirectoryNotFoundError();
        const err2 = new DirectoryNotFoundError('error');
        const err3 = new DirectoryNotFoundError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.DriveNotFoundError', () => {
        const err1 = new DriveNotFoundError();
        const err2 = new DriveNotFoundError('error');
        const err3 = new DriveNotFoundError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.EndOfStreamError', () => {
        const err1 = new EndOfStreamError();
        const err2 = new EndOfStreamError('error');
        const err3 = new EndOfStreamError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.FileLoadError', () => {
        const err1 = new FileLoadError();
        const err2 = new FileLoadError('error');
        const err3 = new FileLoadError('error', err2);
        const err4 = new FileLoadError('error', 'file1.txt');
        const err5 = new FileLoadError('error', 'file2.txt', err4);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test('IO.FileNotFoundError', () => {
        const err1 = new FileNotFoundError();
        const err2 = new FileNotFoundError('error');
        const err3 = new FileNotFoundError('error', err2);
        const err4 = new FileNotFoundError('error', 'file3.txt');
        const err5 = new FileNotFoundError('error', 'file4.txt', err4);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test('IO.IOError', () => {
        const err1 = new IOError();
        const err2 = new IOError('error');
        const err3 = new IOError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.PathTooLongError', () => {
        const err1 = new PathTooLongError();
        const err2 = new PathTooLongError('error');
        const err3 = new PathTooLongError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('IO.SocketError', () => {
        const err1 = new SocketError();
        const err2 = new SocketError('error');
        const err3 = new SocketError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('NotFoundError', () => {
        const err1 = new NotFoundError();
        const err2 = new NotFoundError('error');
        const err3 = new NotFoundError('error', err2);
        const err4 = new NotFoundError('error', 'args');
        const err5 = new NotFoundError('error', 'args', err4);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
        expect(Object.keys(err4).length).toBe(0);
        expect(Object.keys(err5).length).toBe(0);
    });

    test('NotImplementedError', () => {
        const err1 = new NotImplementedError();
        const err2 = new NotImplementedError('error');
        const err3 = new NotImplementedError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('NotPermittedError', () => {
        const err1 = new NotPermittedError();
        const err2 = new NotPermittedError('error');
        const err3 = new NotPermittedError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('NotSupportedError', () => {
        const err1 = new NotSupportedError();
        const err2 = new NotSupportedError('error');
        const err3 = new NotSupportedError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('OutOfMemoryError', () => {
        const err1 = new OutOfMemoryError();
        const err2 = new OutOfMemoryError('error');
        const err3 = new OutOfMemoryError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('RangeError', () => {
        const err1 = new RangeError();
        const err2 = new RangeError('error');
        const err3 = new RangeError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });

    test('ReferenceError', () => {
        const err1 = new ReferenceError();
        const err2 = new ReferenceError('error');
        const err3 = new ReferenceError('error', err2);

        expect(Object.keys(err1).length).toBe(0);
        expect(Object.keys(err2).length).toBe(0);
        expect(Object.keys(err3).length).toBe(0);
    });
});
