const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static ("public") );
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res) {
    res.render("sign");
})

app.get("/receive", function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "님 회원가입이 완료되었습니다.";
    res.send({name: name, message: msg});
})

app.listen(port, () => {
    console.log("server port: ", port );
})