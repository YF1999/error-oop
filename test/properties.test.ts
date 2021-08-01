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
        const err1 = new errors[NativeError]('error');
        const err2 = new errors[NativeError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(NativeRangeError, () => {
        const err1 = new errors[NativeRangeError]('error');
        const err2 = new errors[NativeRangeError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(NativeReferenceError, () => {
        const err1 = new errors[NativeReferenceError]('error');
        const err2 = new errors[NativeReferenceError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(NativeSyntaxError, () => {
        const err1 = new errors[NativeSyntaxError]('error');
        const err2 = new errors[NativeSyntaxError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(NativeTypeError, () => {
        const err1 = new errors[NativeTypeError]('error');
        const err2 = new errors[NativeTypeError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(NativeURIError, () => {
        const err1 = new errors[NativeURIError]('error');
        const err2 = new errors[NativeURIError]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });
});

describe('More-Useful-Errors', () => {
    /* eslint-disable @typescript-eslint/naming-convention */
    const AlreadyInUseError = 'AlreadyInUseError';
    const ArgumentError = 'ArgumentError';
    const ArgumentOutOfRangeError = 'ArgumentOutOfRangeError';
    const FileLoadError = 'FileLoadError';
    const FileNotFoundError = 'FileNotFoundError';
    const NotFoundError = 'NotFoundError';
    /* eslint-enable @typescript-eslint/naming-convention */

    test(AlreadyInUseError, () => {
        expect(new errors[AlreadyInUseError]('object').entityName).toBe('object');
    });

    test(ArgumentError, () => {
        expect(new errors[ArgumentError]().paramName).toBe(undefined);
        expect(new errors[ArgumentError]('error', 'parameter').paramName).toBe('parameter');
    });

    test(ArgumentOutOfRangeError, () => {
        expect(new errors[ArgumentOutOfRangeError]().actualValue).toBe(undefined);
        expect(new errors[ArgumentOutOfRangeError]('error', 'parameter', 'value').actualValue).toBe('value');
    });

    test(FileLoadError, () => {
        expect(new errors[FileLoadError]().fileName).toBe(undefined);
        expect(new errors[FileLoadError]('error', 'file.txt').fileName).toBe('file.txt');
    });

    test(FileNotFoundError, () => {
        expect(new errors[FileNotFoundError]().fileName).toBe(undefined);
        expect(new errors[FileNotFoundError]('error', 'file.txt').fileName).toBe('file.txt');
    });

    test(NotFoundError, () => {
        expect(new errors[NotFoundError]().entityName).toBe(undefined);
        expect(new errors[NotFoundError]('error', 'args').entityName).toBe('args');
    });
});
