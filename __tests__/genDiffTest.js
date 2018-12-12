import fs from 'fs';
import genDiff from '../src';


test('genDiff vs answer', () => {
  const actual = genDiff('__tests__/__fixtures__/before.json',
    '__tests__/__fixtures__/after.json');
  const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
  expect(actual).toBe(expected);
});
