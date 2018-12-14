import fs from 'fs';
import path from 'path';
import buildAst from './buildAst';
import renders from './render';
import dispatch from './parsers';

const readContent = (filePath) => {
  const extName = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf8');
  return dispatch(data, extName);
};


const genDiff = (filePath1, filePath2, format) => {
  const before = readContent(filePath1);
  const after = readContent(filePath2);
  // console.log(buildAst(before, after));
  return renders(buildAst(before, after), format);
};


export default genDiff;
