declare function expectSnapshot<T = unknown>(actual: T): void;

type OOPError = Error & { innerError: Error | null };

declare function testError<E extends ReadonlyArray<OOPError>>(
    name: string,
    getErrors: () => E,
    testExtraProperties: (getErrors: () => E) => void,
): void;

declare function standardTestError<E extends OOPError, T extends new (...args: unknown[]) => E>(
    ErrorConstructor: T,
    name: string,
    message: string,
): void;
