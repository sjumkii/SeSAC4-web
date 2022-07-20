const fs = require("fs").promises;


/*const fs = require("fs");

fs.readFile("./test.txt", function(err, data) {
    if (err) throw err; //에러가 발생했으니 여기서 멈추겠다.; 코드를 멈추겠다

        console.log(data); //에러가 없다면 데이터를 읽어서 보여주어라
});*/

//fs를 프로미스 방식으로 사용하겠다고 할 때는 프로미스로 사용하겠다고 말해줘어야 함. .promise

fs.writeFile("./write.txt", "안녕")
    .then(() => {
        console.log("작성 완료");
    })
    .catch((err) => {
        console.log( err );
    });