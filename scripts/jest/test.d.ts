declare function expectSnapshot<T = unknown>(actual: T): void;

declare function standardTest<E extends Error & { innerError: Error | null }, T extends new (...args: unknown[]) => E>(
    ErrorConstructor: T,
    name: string,
    message: string,
): void;
