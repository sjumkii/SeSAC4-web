const express = require("express")
const app = express();
const port = 8080;
const bodyParser = require("body-parser"); 
const { title } = require("process");
const { readFile } = require("fs");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use( express.static( "public2" ) );
app.use( express.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.get("/", function(req, res) {
    res.render("login"); 
});

app.post("/login", function(req,res){
    console.log("receive-post");
    console.log( req.body );
    
    //let string = fs.readFileSync("./info.txt").toString();
    // 이렇게 사용하는 것은 동기방식이어서 안된다. 
    fs.readFile("./info.txt")
        .then((data)=>{
            let string = data.toString();
            console.log(string);

            let strArray = string.split('//');
            console.log(strArray[0],strArray[1],strArray[2]);
        
            let id = req.body.id
            let password = req.body.pw
            let success = "로그인 성공"
            let fail = "로그인 실패"
            if ( strArray[1] == id && strArray[2] == password){
                res.send( {message: success});
            } else res.send({message: fail});
        })
    });

app.listen(port, () => {
    console.log( "Server Port :" , port);
})