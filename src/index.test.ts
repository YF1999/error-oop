import * as Errors from './index';

test('Test all exports', () => {
    expect(Object.keys(Errors)).toMatchSnapshot();
});
