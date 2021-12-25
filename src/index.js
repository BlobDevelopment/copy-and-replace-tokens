import { existsSync,readFileSync, writeFileSync } from 'fs';
import { getInput, setFailed } from '@actions/core'

const source = getInput('source') || 'test/a.txt';
const target = getInput('target') || source;

//process.env['TEST'] = 'Testing123';

function run() {
  if (!existsSync(source)) {
    setFailed(`${source} does not exist`);
    return;
  }

  let fileAsString = readFileSync(source, 'utf8');

  for (const key of Object.keys(process.env)) {
    console.log(key + ' = ' + process.env[key]);
    fileAsString = fileAsString.replaceAll(`{${key}}`, process.env[key]);
  }

  console.log(`Wrote replacements from ${source} into ${target}`);
  writeFileSync(target, fileAsString);
}

run();
