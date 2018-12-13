import _ from 'lodash';

const objToString = (item, depth) => {
  const space = '    '.repeat(depth);
  const keys = Object.keys(item);
  const result = keys.map((key) => {
    const value = (item[key] instanceof Object)
      ? objToString(item[key], depth + 1) : item[key];
    return `${space}    ${key}: ${value}`;
  });
  return `{\n${result.join('\n')}\n${space}}`;
};

const changeValue = (value, depth) => (value instanceof Object
  ? objToString(value, depth) : value);


const render = (ast, depth = 0) => {
  // console.log(ast);
  const space = '    '.repeat(depth);
  const result = _.flatten(ast.map((value) => {
    switch (value.type) {
      case 'changed':
        return `${space}  - ${value.key}: ${changeValue(value.oldValue, depth + 1)}\n`
        + `${space}  + ${value.key}: ${changeValue(value.newValue, depth + 1)}`;
      case 'removed':
        return `${space}  - ${value.key}: ${changeValue(value.newValue, depth + 1)}`;
      case 'added':
        return `${space}  + ${value.key}: ${changeValue(value.newValue, depth + 1)}`;
      case 'children':
        return `${space}    ${value.key}: ${render(value.children, depth + 1)}`;
      default:
        return `${space}    ${value.key}: ${changeValue(value.newValue, depth + 1)}`;
    }
  }));
  return `{\n${result.join('\n')}\n${space}}`;
};

export default render;
