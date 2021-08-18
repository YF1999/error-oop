import { appendInnerErrorStack, setNonEnumerable } from './Tools';

test('Test `appendInnerErrorStack`', () => {
    const error = { stack: 'inner error stack' };

    expectSnapshot(appendInnerErrorStack(undefined, error as Error));
    expectSnapshot(appendInnerErrorStack('curr error stack', error as Error));
});

test('Test `setNonEnumerable`', () => {
    const obj = { value: 'value' };

    expect(Object.keys(obj)).toStrictEqual(['value']);
    setNonEnumerable(obj, 'value');
    expect(Object.keys(obj)).toStrictEqual([]);
});
