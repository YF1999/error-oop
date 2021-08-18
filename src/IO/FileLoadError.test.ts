import { FileLoadError } from './FileLoadError';

describe('Test `FileLoadError`', () => {
    const name = 'FileLoadError';
    const message = 'error';
    const fileName = 'text.txt';

    function getErrors() {
        const err1 = new FileLoadError();
        const err2 = new FileLoadError(message);
        const err3 = new FileLoadError(message, err2);
        const err4 = new FileLoadError(message, fileName, err3);
        const err5 = new FileLoadError({ message, innerError: err4 });
        const err6 = new FileLoadError({ message, innerError: err5, fileName });

        return [err1, err2, err3, err4, err5, err6];
    }

    test('property: error name', () => {
        getErrors().map((err) => expect(err.name).toBe(name));
    });

    test('property: message', () => {
        const [err1, ...errs] = getErrors();
        expect(err1.message).toBe('');
        errs.map((err) => expect(err.message).toBe(message));
    });

    test('property: inner error', () => {
        const [err1, err2, err3, err4, err5, err6] = getErrors();
        expect(err1.innerError).toBeNull();
        expect(err2.innerError).toBeNull();
        expect(err3.innerError).toBe(err2);
        expect(err4.innerError).toBe(err3);
        expect(err5.innerError).toBe(err4);
        expect(err6.innerError).toBe(err5);
    });

    test('property: file name', () => {
        const [err1, err2, err3, err4, err5, err6] = getErrors();
        expect(err1.fileName).toBeNull();
        expect(err2.fileName).toBeNull();
        expect(err3.fileName).toBeNull();
        expect(err4.fileName).toBe(fileName);
        expect(err5.fileName).toBeNull();
        expect(err6.fileName).toBe(fileName);
    });

    test('empty serialization', () => {
        getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
    });

    test('no enumerable fields', () => {
        getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
    });

    test('own keys', () => {
        const [err1, ...errs] = getErrors();
        expect(Reflect.ownKeys(err1)).toStrictEqual(['stack', '_fileName']);
        errs.map((err) => expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message', '_fileName']));
    });
});
