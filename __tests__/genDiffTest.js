import fs from 'fs';
import genDiff from '../src';


const actual = genDiff('__tests__/__fixtures__/before.json',
  '__tests__/__fixtures__/after.json');
const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8');


test('genDiff vs answer', () => expect(actual).toBe(expected.trim()));
