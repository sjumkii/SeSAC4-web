// promise를 callback으로 바꾼 것       

const http = require('http');

const fs = require('fs').promises;

const server = http.createServer( async function(req, res){
    fs.readFile("./0721_html", function( err, data ) {
        if ( err ) {
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }
        else {
            res.writeHead(200);
            res.end(data);
        }
    })
});


server.listen( 8080, function(){ 
    console.log( "8080번 포트" );
 }) 
 
server.on( "request", function(){ 
    console.log( "Client Request" );
 })
 
server.on( "connection", function(){ 
    console.log( "Client Connection" );
 })
 
server.on( "checkContinue", function(){ 
    console.log( "Client checkContinue" );
 })