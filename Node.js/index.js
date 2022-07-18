const returnString = require("./func.js"); //한개의 모듈 가져오는 방식: 변수든 함수든 하나의 모듈만 내보내는 파일을 require할 때에는 이름이 의미가 없음
const { a, b }= require("./variable.js"); //여러개의 모듈 가져오는 방식: 자동으로 a 라는 변수에는 a라는 모듈로 나온 것이 들어가고 b변수에는 b라는 모듈로 나온 것이 들어간다. 

console.log( returnString() );

