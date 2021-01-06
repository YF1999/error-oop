export function appendInnerErrorStack(
    currStack: string | undefined,
    innerError: Error | undefined,
) {
    return innerError && innerError.stack
        ? `${currStack ?? ''}\n--- inner error ---\n${innerError.stack}`
        : currStack;
}

export function setAllFieldsNonEnumerable(object: {}) {
    for (const field in object) {
        Reflect.defineProperty(object, field, {
            configurable: true,
            enumerable: false,
            writable: true,
        });
    }
}
