import { ArgumentNullError } from './ArgumentNullError';

const message = 'error';
const paramName = 'key_parameter';

testError(
    'ArgumentNullError',
    () => {
        const err1 = new ArgumentNullError();
        const err2 = new ArgumentNullError(message);
        const err3 = new ArgumentNullError(message, err2);
        const err4 = new ArgumentNullError(message, paramName, err3);
        const err5 = new ArgumentNullError({ message, innerError: err4 });
        const err6 = new ArgumentNullError({ message, innerError: err5, paramName });
        const err7 = new ArgumentNullError({ message, innerError: err6, noMessageSuffix: true });
        const err8 = new ArgumentNullError({ message, innerError: err7, paramName, noMessageSuffix: true });

        return [err1, err2, err3, err4, err5, err6, err7, err8] as const;
    },
    (getErrors) => {
        test('property: message', () => {
            const [err1, ...errs] = getErrors();
            expect(err1.message).toBe('');
            errs.map((err) => expectSnapshot(err.message));
        });

        test('property: inner error', () => {
            const [err1, err2, err3, err4, err5, err6, err7, err8] = getErrors();
            expect(err1.innerError).toBeNull();
            expect(err2.innerError).toBeNull();
            expect(err3.innerError).toBe(err2);
            expect(err4.innerError).toBe(err3);
            expect(err5.innerError).toBe(err4);
            expect(err6.innerError).toBe(err5);
            expect(err7.innerError).toBe(err6);
            expect(err8.innerError).toBe(err7);
        });

        test('property: parameter name', () => {
            const [err1, err2, err3, err4, err5, err6, err7, err8] = getErrors();
            expect(err1.paramName).toBeNull();
            expect(err2.paramName).toBeNull();
            expect(err3.paramName).toBeNull();
            expect(err4.paramName).toBe(paramName);
            expect(err5.paramName).toBeNull();
            expect(err6.paramName).toBe(paramName);
            expect(err7.paramName).toBeNull();
            expect(err8.paramName).toBe(paramName);
        });
    },
);
