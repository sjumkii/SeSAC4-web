const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
    if ( err ) throw err;

    console.log( data );
    console.log( data.toString() ); //buffer를 string으로 바꾸어서 실제로 적힌것을 확인할 수 있게 하는 것
});