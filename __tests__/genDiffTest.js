import fs from 'fs';
import genDiff from '../src';


describe('genDiff test1', () => {
  test('genDiff JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff test2', () => {
  test('genDiffTree JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.json',
      '__tests__/__fixtures__/afterTree.json');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.yml',
      '__tests__/__fixtures__/afterTree.yml');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.ini',
      '__tests__/__fixtures__/afterTree.ini');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});
