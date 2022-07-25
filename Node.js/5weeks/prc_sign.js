// 회원가입 폼 만들기 

const express = require("express")
const app = express();
const port = 8080;
const bodyParser = require("body-parser"); 
const { title } = require("process");
const { readFile } = require("fs");
const fs = require("fs").promises;
const data = 

app.set("view engine", "ejs");
app.use( express.static( "public2" ) );
app.use( express.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.get("/", function(req, res) {
    res.render("prc_login"); 
});

app.post("/login", function(req, res) { 
    var {id, password} = req.body;
    console.log( req.body );
    
    fs.readFile("./info.txt")
    .then(() => {
        console.log("작성 완료");
    })
    .catch((err) => {
        console.log( err );
    });

    res.render( "prc_login_receive", req.body );

});

app.get("/", function(req, res) {
    res.render("prc_sign"); 
});

app.post("/sign", function(req, res) { 
    var name = req.body.name;
    var id = req.body.id;
    var password = req.body.password;
    console.log( req.body );

    var result = name+'//'+id+'//'+password;
    
    fs.writeFile("./info.txt", result)
    .then(() => {
        console.log("작성 완료");
    })
    .catch((err) => {
        console.log( err );
    });

    res.render( "prc_sign_receive", req.body );

});

app.listen(port, () => {
    console.log( "Server Port :" , port);
})