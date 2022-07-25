//get으로 정보 받기 

const express = require("express")
const app = express();
const port = 8080;
const bodyParser = require("body-parser"); 

app.set("view engine", "ejs");
app.use( express.static( "public2" ) );
app.use( express.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.get("/", function(req, res) {
    res.render("prc_get"); 
});
app.get("/get_receive", function(req, res) { 
    console.log( req.query );
    res.render("prc_get_receive", req.query);
});

app.listen(port, () => {
    console.log( "Server Port :" , port);
});