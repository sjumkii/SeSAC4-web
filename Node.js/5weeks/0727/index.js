const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static ("public") );
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res) {
    res.render("index");
})

/*app.post("/receive", function(req,res){
    console.log( req.body );
    res.send( req.body.name + "안녕" );
})*/

/*app.post("/receive", function(req,res){
    var list = [ req.body.name , req.body.age ];
    res.send( list );
})*/

/* app.post("/receive", function(req,res){
    var list = [ req.body.name , req.body.age ];
    res.send( {list : list} );
})*/

app.get("/test", function(req, res){
    res.send("test"); //클라이언트에게 글자를 보냈으니까 글자를 보여줌; res.send는 그냥 데이터를 보낼 뿐이다. ; res.send는 axios와 연관 없음; 그냥 응답으로 send하는 것. 근데 axios라는 함수 자체가 back에 갔다 오는데 갔다 오면서 받은 데잍터를 promise로 가는 부분에더 데이터를 담아 옴; 즉 가면 우선 받아옴 그걸 받을 때 promise가 해체됐을 때 데이터에 들어가도록 담는 것.;이 과정에서 axios를 사용하면 axios에 back에서 준 내용이 들어가는 것 뿐
})

app.get("/test2", function(req, res){
    res.send({name: "test2", message: 123});
})

app.get("/receive", function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕";
    res.send({name: name, message: msg});
})

app.post("/receive", function(req,res){
    console.log( req.body )
    var name = req.body.name;
    var msg = req.body.name + "안녕";
    res.send( {name: name, message: msg} );
})

app.listen(port, () => {
    console.log("server port: ", port );
})