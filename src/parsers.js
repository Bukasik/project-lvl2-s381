import yaml from 'js-yaml';

const parser = (data, extName) => {
  const mapping = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
  };
  return mapping[extName](data);
};

export default parser;
