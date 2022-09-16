// 클라이언트

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
    console.log("client");
    res.sendFile(__dirname + "/chat2.html");
});

io.on ("connection", function(socket){
    console.log( "connected" );
    socket.emit("hello", "sever hello");
    socket.on("click", function(data) {
        console.log( "client click" );
        socket.emit('clickResponse', 'success'); //socket에 보내면 나한테 보낸 애한테만 보내는데
        io.emit("clickResponse", "io success"); //io한테 보내면 보든 애한테 다보냄; io는 전체 연결을 
    })
})

http.listen( 8000, function() {
    console.log( "Server port : " , 8000 );
});