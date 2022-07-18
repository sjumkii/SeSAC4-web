//os 모듈

const os = require("os");

console.log( os.hostname() );


//path 모듈

const path = require("path");
const string = __filename;
console.log( path.extname(string) );