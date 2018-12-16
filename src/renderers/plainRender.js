import _ from 'lodash';

const renderValue = value => (value instanceof Object ? '[complex value]' : value);


const render = (ast, ancestors = '') => {
  const result = _.flatten(ast.map((value) => {
    const fullPath = ancestors === '' ? value.key : `${ancestors}.${value.key}`;
    switch (value.type) {
      case 'unchanged':
        return '';
      case 'changed':
        return `Property '${fullPath}' was updated. From '${renderValue(value.oldValue)}' to '${renderValue(value.newValue)}'`;
      case 'removed':
        return `Property '${fullPath}' was removed`;
      case 'added':
        return `Property '${fullPath}' was added with value: '${renderValue(value.newValue)}'`;
      case 'nested':
        return render(value.children, fullPath);
      default:
        throw new Error(`Unknown type ${value.type}`);
    }
  }));
  return result.filter(item => item !== '').join('\n');
};

export default render;
