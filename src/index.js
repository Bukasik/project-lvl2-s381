import fs from 'fs';
import path from 'path';
import buildAst from './buildAst';
import render from './render';
import parser from './parsers';

const readContent = (filePath) => {
  const extName = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf8');
  return parser(data, extName);
};


const genDiff = (filePath1, filePath2) => {
  const before = readContent(filePath1);
  const after = readContent(filePath2);
  return render(buildAst(before, after));
};


export default genDiff;
