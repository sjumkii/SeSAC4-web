const http = require("http");

const server = http.createServer( function(req, res){ //req: request, res: response
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf8'}); //응답할 때 응답 헤더를 200으로 보낸다는 것
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>"); //응답을 할때 거기에 어떤 내용이 적혀질지를 적고 보내는 것
});

server.listen( 8000, function(){ 
   console.log( "8000번 포트" );
}) //서버가 어떤 포트로열리는지 허락하는 것. 접속할 때는 localhost8000으로 접속 가능

server.on( "request", function(){ 
    console.log( "Client Request" );
 })

 server.on( "connection", function(){ 
    console.log( "Client Connection" );
 })

 server.on( "checkContinue", function(){ 
    console.log( "Client checkContinue" );
 })