import * as fs from 'fs';
import * as core from '@actions/core'

const source = core.getInput('source') || 'test/a.txt';
const target = core.getInput('target') || 'test/b.txt';

//process.env['{TEST}'] = 'Testing123';

function run() {
  if (!fs.existsSync(source)) {
    core.setFailed(`${source} does not exist`);
    return;
  }

  //fs.copyFileSync(source, target);

  let fileAsString = fs.readFileSync(source, 'utf8');

  Object.keys(process.env).forEach(key => {
    if (key.charAt(0) === '{' && key.charAt(key.length - 1) === '}') {
      fileAsString = fileAsString.replace(key, process.env[key]!);
    }
  });

  console.log(`Wrote replacements from ${source} into ${target}`);
  fs.writeFileSync(target, fileAsString);
}

run();
