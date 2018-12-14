import simpleRender from './simpleRender';
import plainRender from './plainRender';

const renders = (data, format) => {
  const mapping = {
    simple: simpleRender,
    plain: plainRender,
  };
  return mapping[format](data);
};

export default renders;
