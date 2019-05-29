const char = require('./char');

test('char function exists', () => {
  expect(typeof char).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(char('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(char('ab1c1d1e1f1g1')).toEqual('1');
});
