const { log } = require("console");
const path = require("path");

// console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);

const filePath1 = '/public_html/home/index.html';

const currentFile = __filename;
// console.log(currentFile);
// console.log(__dirname);

let result = path.basename(currentFile);
// console.log(result);


let basenameWithoutExt = path.basename(currentFile , '.js');
console.log('basenameWithoutExt > ', basenameWithoutExt);


let dirName = path.dirname(currentFile);
console.log(dirName);


console.log('ext >' , path.extname(currentFile));
console.log('ext >', path.extname('index.md.js.html.js'));
