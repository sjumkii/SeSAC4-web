const fs = require("fs").promises;

exports.post_user = function( data ){
    const { id, pw, name, age } = data;
    fs.appendFile("./info.txt", `\n${id}//${pw}//${name}//${age}`);
}

exports.get_user = async function() {
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString(); //읽으면 원래는 버퍼 형태이지만 우리는 버퍼를 볼 수 없으므로 문자열로 바꾼다. 
}
