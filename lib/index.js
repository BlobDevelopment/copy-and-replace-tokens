"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const core = __importStar(require("@actions/core"));
const source = core.getInput('source') || 'test/a.txt';
const target = core.getInput('target') || 'test/b.txt';
process.env['{TEST}'] = 'Testing123';
function run() {
    if (!fs.existsSync(source)) {
        core.setFailed(`${source} does not exist`);
        return;
    }
    //fs.copyFileSync(source, target);
    let fileAsString = fs.readFileSync(source, 'utf8');
    Object.keys(process.env).forEach(key => {
        if (key.charAt(0) === '{' && key.charAt(key.length - 1) === '}') {
            fileAsString = fileAsString.replace(key, process.env[key]);
        }
    });
    console.log(fileAsString);
    fs.writeFileSync(target, fileAsString);
}
run();
//# sourceMappingURL=index.js.map