import _ from 'lodash';

const propertyAction = [
  {
    check: (key, obj1, obj2) => (!_.has(obj1, key) && _.has(obj2, key)),
    perform: (key, obj1, obj2) => ({ key, type: 'added', newValue: obj2[key] }),
  },

  {
    check: (key, obj1, obj2) => (_.has(obj1, key) && !_.has(obj2, key)),
    perform: (key, obj) => ({ key, type: 'removed', newValue: obj[key] }),
  },

  {
    check: (key, obj1, obj2) => ((_.has(obj1, key) && _.has(obj2, key))
                                && (obj1[key] === obj2[key])),
    perform: (key, obj) => ({ key, type: 'unchanged', newValue: obj[key] }),
  },

  {
    check: (key, obj1, obj2) => ((_.has(obj1, key) && _.has(obj2, key))
                                && (obj1[key] !== obj2[key])),
    perform: (key, obj1, obj2) => ({
      key, type: 'changed', oldValue: obj1[key], newValue: obj2[key],
    }),
  },
];

const getPropertyAction = (key, obj1, obj2) => (
  propertyAction.find(({ check }) => check(key, obj1, obj2)));

const buildAst = (obj1, obj2) => {
  const commonKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  return commonKeys.map((key) => {
    const { perform } = getPropertyAction(key, obj1, obj2);
    return perform(key, obj1, obj2);
  });
};

export default buildAst;
