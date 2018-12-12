import yaml from 'js-yaml';
import ini from 'ini';

const parser = (data, extName) => {
  const mapping = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  return mapping[extName](data);
};

export default parser;
