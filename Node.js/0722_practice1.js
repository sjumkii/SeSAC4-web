const http = require('http');

const fs = require('fs').promises;

const server = http.createServer( async function(req, res){
    
    try {
        console.log(req.url);
        const data = await fs. readFile("./0721_practice.html");
        res.writeHead(200);
        res.end(data);
        //const data = await fs. readFile("./0721_practice.html");
        //res.writeHead(200);
        //res.write();
        //res.end(data);
    } 
    
    catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
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