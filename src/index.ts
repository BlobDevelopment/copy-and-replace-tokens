import { existsSync,readFileSync, writeFileSync } from 'fs';
import { getInput, setFailed } from '@actions/core'

const source = getInput('source') || 'test/a.txt';
const target = getInput('target') || 'test/b.txt';

//process.env['{TEST}'] = 'Testing123';

function run() {
  if (!existsSync(source)) {
    setFailed(`${source} does not exist`);
    return;
  }

  //fs.copyFileSync(source, target);

  let fileAsString = readFileSync(source, 'utf8');

  Object.keys(process.env).forEach(key => {
    if (key.charAt(0) === '{' && key.charAt(key.length - 1) === '}') {
      fileAsString = fileAsString.replace(key, process.env[key]!);
    }
  });

  console.log(`Wrote replacements from ${source} into ${target}`);
  writeFileSync(target, fileAsString);
}

run();
