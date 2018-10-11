const path = require("path");
const log = console.log;

const file = 'abc.js';

if ((file.indexOf('.') !== 0) && (file.slice(-3) === '.js')) {

}

const isJsFile = path.extname(file) === ".js";
const { name: fileName } = path.parse(file);
log(isJsFile, fileName);

log(path.basename(file));

log(path.extname(file));

log(path.parse(file));