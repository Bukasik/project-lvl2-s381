import fs from 'fs';
import path from 'path';
import buildAst from './buildAst';
import renders from './renderers';
import dispatch from './parsers';

const readContent = (filePath) => {
  const extName = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf8');
  return dispatch(data, extName);
};


const genDiff = (filePath1, filePath2, format) => {
  const content1 = readContent(filePath1);
  const content2 = readContent(filePath2);
  // console.log(buildAst(before, after));
  return renders(buildAst(content1, content2), format);
};


export default genDiff;
