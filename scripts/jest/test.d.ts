declare function standardTest<E extends Error & { innerError?: Error }, T extends new (...args: unknown[]) => E>(
    ErrorConstructor: T,
    name: string,
    message: string,
): void;

declare namespace NodeJS {
    interface Global {
        standardTest: typeof standardTest;
    }
}
