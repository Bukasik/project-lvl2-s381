import fs from 'fs';
import genDiff from '../src';


describe('genDiff simple answer', () => {
  test('genDiff JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.json',
      '__tests__/__fixtures__/input/after.json', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.yml',
      '__tests__/__fixtures__/input/after.yml', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.ini',
      '__tests__/__fixtures__/input/after.ini', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff simple answer tree', () => {
  test('genDiffTree JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.json',
      '__tests__/__fixtures__/input/afterTree.json', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.yml',
      '__tests__/__fixtures__/input/afterTree.yml', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.ini',
      '__tests__/__fixtures__/input/afterTree.ini', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff plain answer', () => {
  test('genDiffTree JSON vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.json',
      '__tests__/__fixtures__/input/after.json', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
  test('genDiff YAML vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.yml',
      '__tests__/__fixtures__/input/after.yml', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff INI vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/before.ini',
      '__tests__/__fixtures__/input/after.ini', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff plain answer tree', () => {
  test('genDiffTree JSON vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.json',
      '__tests__/__fixtures__/input/afterTree.json', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree YAML vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.yml',
      '__tests__/__fixtures__/input/afterTree.yml', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree INI vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/input/beforeTree.ini',
      '__tests__/__fixtures__/input/afterTree.ini', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});


test('genDiff json to json format', () => {
  const actual = genDiff('__tests__/__fixtures__/input/beforeTree.json',
    '__tests__/__fixtures__/input/afterTree.json', 'jsondiff');
  const expected = fs.readFileSync('__tests__/__fixtures__/answer/jsonAnswerTree.txt', 'utf8').trim();
  expect(actual).toBe(expected);
});
