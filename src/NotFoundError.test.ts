import { NotFoundError } from './NotFoundError';

describe('Test `NotFoundError`', () => {
    const name = 'NotFoundError';
    const message = 'error';
    const entityName = 'device D';

    function getErrors() {
        const err1 = new NotFoundError();
        const err2 = new NotFoundError(message);
        const err3 = new NotFoundError(message, err2);
        const err4 = new NotFoundError(message, entityName, err3);
        const err5 = new NotFoundError({ message, innerError: err4 });
        const err6 = new NotFoundError({ message, innerError: err5, entityName });

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
        expect(err1.innerError).toBeUndefined();
        expect(err2.innerError).toBeUndefined();
        expect(err3.innerError).toBe(err2);
        expect(err4.innerError).toBe(err3);
        expect(err5.innerError).toBe(err4);
        expect(err6.innerError).toBe(err5);
    });

    test('property: entity name', () => {
        const [err1, err2, err3, err4, err5, err6] = getErrors();
        expect(err1.entityName).toBeUndefined();
        expect(err2.entityName).toBeUndefined();
        expect(err3.entityName).toBeUndefined();
        expect(err4.entityName).toBe(entityName);
        expect(err5.entityName).toBeUndefined();
        expect(err6.entityName).toBe(entityName);
    });

    test('empty serialization', () => {
        getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
    });

    test('no enumerable fields', () => {
        getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
    });

    test('own keys', () => {
        const [err1, ...errs] = getErrors();
        expect(Reflect.ownKeys(err1)).toStrictEqual(['stack', '_entityName']);
        errs.map((err) => expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message', '_entityName']));
    });
});
