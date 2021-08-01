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
        const err1 = new errors[ErrorPro]('error');
        const err2 = new errors[ErrorPro]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(RangeErrorPro, () => {
        const err1 = new errors[RangeErrorPro]('error');
        const err2 = new errors[RangeErrorPro]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(ReferenceErrorPro, () => {
        const err1 = new errors[ReferenceErrorPro]('error');
        const err2 = new errors[ReferenceErrorPro]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(SyntaxErrorPro, () => {
        const err1 = new errors[SyntaxErrorPro]('error');
        const err2 = new errors[SyntaxErrorPro]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(TypeErrorPro, () => {
        const err1 = new errors[TypeErrorPro]('error');
        const err2 = new errors[TypeErrorPro]('error', err1);
        expect(err1.innerError).toBe(undefined);
        expect(err2.innerError).toBe(err1);
    });

    test(URIErrorPro, () => {
        const err1 = new errors[URIErrorPro]('error');
        const err2 = new errors[URIErrorPro]('error', err1);
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
