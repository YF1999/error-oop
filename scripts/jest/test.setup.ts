import path from 'path';

function wrapConsole(): void {
    type Output = (...data: unknown[]) => void;

    function outputFactory(outputImpl: Output): Output {
        const filter = __dirname.split(path.sep).slice(-3).join(path.sep);

        const output: Output = (...data) => {
            const obj = {};
            Error.captureStackTrace(obj, output);
            // @ts-ignore
            const { stack } = obj;

            if (!stack.split('\n')[1].includes(filter)) {
                outputImpl(...data);
            }
        };

        return output;
    }

    console.debug = outputFactory(console.debug);
    console.error = outputFactory(console.error);
    console.info = outputFactory(console.info);
    console.log = outputFactory(console.log);
    console.warn = outputFactory(console.warn);
}

function standardTest<E extends Error & { innerError: Error | null }, T extends new (...args: unknown[]) => E>(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ErrorConstructor: T,
    name: string,
    message: string,
): void {
    describe(`Test \`${name}\``, () => {
        function getErrors() {
            const err1 = new ErrorConstructor();
            const err2 = new ErrorConstructor(message);
            const err3 = new ErrorConstructor(message, err2);
            const err4 = new ErrorConstructor({ message, innerError: err3 });

            return [err1, err2, err3, err4];
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
            const [err1, err2, err3, err4] = getErrors();
            expect(err1.innerError).toBeNull();
            expect(err2.innerError).toBeNull();
            expect(err3.innerError).toBe(err2);
            expect(err4.innerError).toBe(err3);
        });

        test('empty serialization', () => {
            getErrors().map((err) => expect(JSON.stringify(err)).toBe('{}'));
        });

        test('no enumerable fields', () => {
            getErrors().map((err) => expect(Object.keys(err).length).toBe(0));
        });

        test('own keys', () => {
            const [err1, ...errs] = getErrors();
            expect(Reflect.ownKeys(err1)).toStrictEqual(['stack']);
            errs.map((err) => expect(Reflect.ownKeys(err)).toStrictEqual(['stack', 'message']));
        });
    });
}

function setupJest(): void {
    wrapConsole();

    global.standardTest = standardTest;
    global.expectSnapshot = (actual) => expect(actual).toMatchSnapshot();
}

setupJest();
