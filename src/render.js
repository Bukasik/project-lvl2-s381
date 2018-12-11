import _ from 'lodash';

const render = (ast) => {
  const result = _.flatten(ast.map((value) => {
    switch (value.type) {
      case 'unchanged':
        return `    ${value.key}: ${value.newValue}`;
      case 'changed':
        return `  - ${value.key}: ${value.oldValue}\n  + ${value.key}: ${value.newValue}`;
      case 'removed':
        return `  - ${value.key}: ${value.newValue}`;
      case 'added':
        return `  + ${value.key}: ${value.newValue}`;
      default:
        return '';
    }
  }));
  return `{\n${result.join('\n')}\n}`;
};

export default render;
