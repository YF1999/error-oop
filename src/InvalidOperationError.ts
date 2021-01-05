import { Error } from './Error';

export class InvalidOperationError extends Error {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message?: string, innerError?: Error) {
        super(message, innerError);
    }
}
