import { appendInnerErrorStack, setNonEnumerable } from './Tools';

test('Test `appendInnerErrorStack`', () => {
    const error = { stack: 'inner error stack' };

    expect(appendInnerErrorStack(undefined, error as Error)).toMatchSnapshot();
    expect(appendInnerErrorStack('curr error stack', error as Error)).toMatchSnapshot();
});

test('Test `setNonEnumerable`', () => {
    const obj = { value: 'value' };

    expect(Object.keys(obj)).toStrictEqual(['value']);
    setNonEnumerable(obj, 'value');
    expect(Object.keys(obj)).toStrictEqual([]);
});
