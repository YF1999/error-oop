import { ExtendedError } from './Error';

export class OutOfMemoryError extends ExtendedError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: ExtendedError);

    public constructor(message?: string, innerError?: ExtendedError) {
        super(message, innerError);
    }
}
