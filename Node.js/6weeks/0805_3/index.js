const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engin", "ejs");
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require("./routes");
app.use('/visitor', router);

app.listen(port, () => {
    console.log( "Server Port : ", port );
});
