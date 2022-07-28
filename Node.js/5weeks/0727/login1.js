const express = require( "express" )
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const { title } = require( "process" )
const { readFile } = require( "fs" );
const fs = require( "fs" ).promises;

app.set( "view engine", "ejs" );
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());

app.get("/", function(req, res) {
    res.render( "login1" ) //이 login1을 ejs 파일의 url 끝 부분에 입력해주면 된다. 
})

app.post("/login1", function(req, res){
    console.log("receive-post");
    console.log( req.body );

    fs.readFile("./info.txt")
    .then((data) => {
        let string = data.toString() // let string = fs.readFile("./info.txt").toString(); 으로 적으면 안된다. 
        console.log(string);
        
        let strArray = string.split('//') //이게 let string = data.toString().split(//)으로 하나로 합쳐도 돌아 가는가?
        console.log(strArray[0], strArray[1], strArray[2]);

        let id = req.body.id
        let pw = req.body.pw
        let fail = "로그인 실패"
        if ( strArray[1] == id && strArray[2] == password){
            res.render( "login_success");
        } else res.send({message: fail});
    })
});

app.listen(port, () => {
    console.log( "Serever Port : ", port);
})