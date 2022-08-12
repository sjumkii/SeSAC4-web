const express = require('express');
const cookieparser = require( 'cookie-parser' );
const app = express();

app.set("view engine", "ejs");
app.use( cookieparser('1234') );

const cookieConfig = {
    maxAge: 30000, 
    path: '/',
    httpOnly: true,
    signed: true 
};

app.get("/", (req, res) => {
    res.cookie('key', 'value', cookieConfig); 
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req, res) => {
    console.log( req.cookies );
    res.send( req.cookies );
})

app.get("/cookie", (req, res) => {
    res.render( "cookies" );
})

app.listen(8000, () => {
    console.log( 'Server Port : ', 8000 );
})