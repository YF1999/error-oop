import { ArgumentError } from './ArgumentError';

describe('Test `ArgumentError`', () => {
    const name = 'ArgumentError';
    const message = 'error';
    const paramName = 'key_parameter';

    function getErrors() {
        const err1 = new ArgumentError();
        const err2 = new ArgumentError(message);
        const err3 = new ArgumentError(message, err2);
        const err4 = new ArgumentError(message, paramName, err3);
        const err5 = new ArgumentError({ message, innerError: err4 });
        const err6 = new ArgumentError({ message, innerError: err5, paramName });
        const err7 = new ArgumentError({ message, innerError: err6, noMessageSuffix: true });
        const err8 = new ArgumentError({ message, innerError: err7, paramName, noMessageSuffix: true });

        return [err1, err2, err3, err4, err5, err6, err7, err8];
    }

    test('property: error name', () => {
        getErrors().map((err) => expect(err.name).toBe(name));
    });

    test('property: message', () => {
        const [err1, ...errs] = getErrors();
        expect(err1.message).toBe('');
        errs.map((err) => expect(err.message).toMatchSnapshot());
    });

    test('property: inner error', () => {
        const [err1, err2, err3, err4, err5, err6, err7, err8] = getErrors();
        expect(err1.innerError).toBeUndefined();
        expect(err2.innerError).toBeUndefined();
        expect(err3.innerError).toBe(err2);
        expect(err4.innerError).toBe(err3);
        expect(err5.innerError).toBe(err4);
        expect(err6.innerError).toBe(err5);
        expect(err7.innerError).toBe(err6);
        expect(err8.innerError).toBe(err7);
    });

    test('property: parameter name', () => {
        const [err1, err2, err3, err4, err5, err6, err7, err8] = getErrors();
        expect(err1.paramName).toBeUndefined();
        expect(err2.paramName).toBeUndefined();
        expect(err3.paramName).toBeUndefined();
        expect(err4.paramName).toBe(paramName);
        expect(err5.paramName).toBeUndefined();
        expect(err6.paramName).toBe(paramName);
        expect(err7.paramName).toBeUndefined();
        expect(err8.paramName).toBe(paramName);
    });

    test('empty serialization', () => {
        getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
    });

    test('no enumerable fields', () => {
        getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
    });

    test('own keys', () => {
        const [err1, ...errs] = getErrors();
        expect(Reflect.ownKeys(err1)).toStrictEqual(['stack', '_paramName']);
        errs.map((err) => expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message', '_paramName']));
    });
});
