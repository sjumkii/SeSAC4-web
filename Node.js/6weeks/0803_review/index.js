const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set( "view engine", "ejs" );
app.use( express.static( "uploads" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require("./routes");
//만약 routes 안 파일 이름을 다른것으로 바꾸고 싶다면 바꾼 이름까지 다 써주어야 함. index.js는 이름을 다 써주지 않아도 찾을 수 있는 유일한 아이임

app.use("/user", router)
// app.use에 적힌 경로는 /user이고 내가 접속한 경로도 localhost:8080/user로 일치 한다면 roter에 적힌대로 실행한다. 

app.get("/", function(req, res){
    res.send("routes");
})

app.listen (port, () => {
    console.log( 'Server Port : ', port );
})