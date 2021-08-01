export function appendInnerErrorStack(currStack?: string, innerError?: Error): string | undefined {
    return innerError && innerError.stack
        ? `${currStack ?? 'No stack.'}\n--- inner error ---\n${innerError.stack}`
        : currStack;
}

export function setNonEnumerable(obj: object, property: string): void {
    Reflect.defineProperty(obj, property, {
        configurable: true,
        enumerable: false,
        writable: true,
    });
}
