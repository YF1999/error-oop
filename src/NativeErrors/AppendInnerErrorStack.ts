export function appendInnerErrorStack(currStack?: string, innerError?: Error): string | undefined {
    return innerError && innerError.stack
        ? `${currStack ?? 'No stack.'}\n--- inner error ---\n${innerError.stack}`
        : currStack;
}
