const{ test, b } = require("./variable.js");

function connect() {
    return test + "connect";
} 

module.exports = connect; //한개만 내보낼 때는 그냥 함수를 바로 적어주면 되지만 여러개를 내보낼 때는 중괄호 안에 넣어주어야 함