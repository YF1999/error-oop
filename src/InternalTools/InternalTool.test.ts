import { IErrorArguments, IErrorOptions } from '../Native';

import { InternalErrorTool } from './InternalTool';

interface IErrorObject extends IErrorOptions {
    a?: string;
    b?: number;
    c?: boolean;
    d?: string;
    e?: string;
}

describe('Test `InternalErrorTool`', () => {
    test('test `parseErrorArgument`', () => {
        const message = 'error object';
        const innerError = new Error();

        const args: IErrorArguments<IErrorObject, ['a', 'b', 'c', 'd', 'e']>[] = [
            [],
            [{ message }],
            [{ message, a: 'a', b: -1 }],
            [{ a: 'a', c: true, d: 'd', e: 'e' }],
            [message, 'a', -1, innerError],
            [message, 'a', -1, true],
            [message, 'a', -1, false, 'd', 'e', innerError],
        ];
        args.map((arg) =>
            expect(InternalErrorTool.parseErrorArguments(['a', 'b', 'c', 'd', 'e'], ...arg)).toMatchSnapshot(),
        );
    });
});
