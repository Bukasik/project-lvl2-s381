import fs from 'fs';
import genDiff from '../src';


describe('genDiff simple answer', () => {
  test('genDiff JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff simple answer tree', () => {
  test('genDiffTree JSON vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.json',
      '__tests__/__fixtures__/afterTree.json', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree YAML vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.yml',
      '__tests__/__fixtures__/afterTree.yml', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree INI vs answer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.ini',
      '__tests__/__fixtures__/afterTree.ini', 'simple');
    const expected = fs.readFileSync('__tests__/__fixtures__/answerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff plain answer', () => {
  test('genDiffTree JSON vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
  test('genDiff YAML vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiff INI vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswer.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});

describe('genDiff plain answer tree', () => {
  test('genDiffTree JSON vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.json',
      '__tests__/__fixtures__/afterTree.json', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree YAML vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.yml',
      '__tests__/__fixtures__/afterTree.yml', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });

  test('genDiffTree INI vs plainAnswer', () => {
    const actual = genDiff('__tests__/__fixtures__/beforeTree.ini',
      '__tests__/__fixtures__/afterTree.ini', 'plain');
    const expected = fs.readFileSync('__tests__/__fixtures__/plainAnswerTree.txt', 'utf8').trim();
    expect(actual).toBe(expected);
  });
});


test('genDiff json to json format', () => {
  const actual = genDiff('__tests__/__fixtures__/beforeTree.json',
    '__tests__/__fixtures__/afterTree.json', 'jsondiff');
  const expected = fs.readFileSync('__tests__/__fixtures__/jsonAnswerTree.txt', 'utf8').trim();
  expect(actual).toBe(expected);
});
