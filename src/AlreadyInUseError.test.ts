import { AlreadyInUseError } from './AlreadyInUseError';

const entityName = 'entity';

testError(
    'AlreadyInUseError',
    () => {
        const err1 = new AlreadyInUseError(entityName);
        const err2 = new AlreadyInUseError(entityName, 'name');
        const err3 = new AlreadyInUseError(entityName, 'name', 'key');

        return [err1, err2, err3] as const;
    },
    (getErrors) => {
        test('property: message', () => {
            getErrors().map((err) => expectSnapshot(err.message));
        });

        test('property: inner error', () => {
            getErrors().map((err) => expect(err.innerError).toBeNull());
        });

        test('property: entity name', () => {
            getErrors().map((err) => expect(err.entityName).toBe(entityName));
        });
    },
);
