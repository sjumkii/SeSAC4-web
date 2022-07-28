const express = require("express")
const app = express();
const port = 8080;
const bodyParser = require("body-parser"); //body parser을 require로 불러오고 

app.set("view engine", "ejs");
app.use( express.static( "public2" ) );
app.use( express.urlencoded({extended: true}));
app.use(bodyParser.json()); //데이터를 받을 때 json형식으로 받겠다라고 선언한 것

app.get("/", function(req, res) {
    res.render("index"); // 처음접속했을 때 index.ejs라는 파일이 보이게 하겠다
});

app.get("/receive", function(req, res) { //ejs에서 receive로 가라고 했으므로 이리로 감
    console.log( req.body );
    console.log( req.query );
    res.render("receive", req.query);
    //console.log( "receive-get" );
    //res.render("index"); 
});

app.post("/receive", function(req, res) { 
    console.log( req.body );
    res.render("receive", req.body);
    //1번.index.ejs
    //console.log( "receive-post" );
    //console.log( req.body );
    //res.render("receive"); 
    //2번.recieve.ejs
    //console.log( req.body );
    //res.render( "receive", req.body );

});

app.listen(port, () => {
    console.log( "Server Port :" , port);
})