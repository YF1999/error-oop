import { AlreadyInUseError } from './AlreadyInUseError';

describe('Test `AlreadyInUseError`', () => {
    const name = 'AlreadyInUseError';
    const entityName = 'entity';

    function getErrors() {
        const err1 = new AlreadyInUseError(entityName);
        const err2 = new AlreadyInUseError(entityName, 'name');
        const err3 = new AlreadyInUseError(entityName, 'name', 'key');

        return [err1, err2, err3];
    }

    test('property: error name', () => {
        getErrors().map((err) => expect(err.name).toBe(name));
    });

    test('property: message', () => {
        getErrors().map((err) => expectSnapshot(err.message));
    });

    test('property: inner error', () => {
        getErrors().map((err) => expect(err.innerError).toBeNull());
    });

    test('property: entity name', () => {
        getErrors().map((err) => expect(err.entityName).toBe(entityName));
    });

    test('empty serialization', () => {
        getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
    });

    test('no enumerable fields', () => {
        getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
    });

    test('own keys', () => {
        getErrors().map((err) =>
            expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message', '_entityName', '_inUse']),
        );
    });
});
