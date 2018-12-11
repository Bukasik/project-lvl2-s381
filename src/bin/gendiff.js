#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';
import { version } from '../../package.json';

program
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .arguments('<firstConfig>')
  .arguments('<secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((filePath1, filePath2) => {
    console.log(genDiff(filePath1, filePath2));
  })
  .parse(process.argv);
