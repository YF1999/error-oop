import { ArgumentOutOfRangeError } from './ArgumentOutOfRangeError';

describe('Test `ArgumentOutOfRangeError`', () => {
    const name = 'ArgumentOutOfRangeError';
    const message = 'error';
    const paramName = 'key_parameter';
    const actualValue = 'wrong_value';

    function getErrors() {
        const err1 = new ArgumentOutOfRangeError();
        const err2 = new ArgumentOutOfRangeError(message);
        const err3 = new ArgumentOutOfRangeError(message, err2);
        const err4 = new ArgumentOutOfRangeError(message, paramName, err3);
        const err5 = new ArgumentOutOfRangeError(message, paramName, actualValue, err4);
        const err6 = new ArgumentOutOfRangeError({ message, innerError: err5, paramName });
        const err7 = new ArgumentOutOfRangeError({ message, innerError: err6, noMessageSuffix: true });
        const err8 = new ArgumentOutOfRangeError({
            message,
            innerError: err7,
            paramName,
            actualValue,
        });

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
        expect(err5.paramName).toBe(paramName);
        expect(err6.paramName).toBe(paramName);
        expect(err7.paramName).toBeUndefined();
        expect(err8.paramName).toBe(paramName);
    });

    test('property: actual value', () => {
        const [err1, err2, err3, err4, err5, err6, err7, err8] = getErrors();
        expect(err1.actualValue).toBeUndefined();
        expect(err2.actualValue).toBeUndefined();
        expect(err3.actualValue).toBeUndefined();
        expect(err4.actualValue).toBeUndefined();
        expect(err5.actualValue).toBe(actualValue);
        expect(err6.actualValue).toBeUndefined();
        expect(err7.actualValue).toBeUndefined();
        expect(err8.actualValue).toBe(actualValue);
    });

    test('empty serialization', () => {
        getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
    });

    test('no enumerable fields', () => {
        getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
    });

    test('own keys', () => {
        const [err1, ...errs] = getErrors();
        expect(Reflect.ownKeys(err1)).toStrictEqual(['stack', '_paramName', '_actualValue']);
        errs.map((err) =>
            expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message', '_paramName', '_actualValue']),
        );
    });
});
