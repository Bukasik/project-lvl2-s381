import fs from 'fs';
import buildAst from './buildAst';
import render from './render';

const readContent = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};


const genDiff = (filePath1, filePath2) => {
  const before = readContent(filePath1);
  const after = readContent(filePath2);
  return render(buildAst(before, after));
};


export default genDiff;
