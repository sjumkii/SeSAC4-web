var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/socket.html");
});

io.on ("connection", function(socket){
    console.log("connected");
    socket.on("hello", function(data) {
        console.log( "client : ", data );
        socket.emit('Response', 'hello : 안녕하세요'); 
    })
    socket.on("study", function(data) {
        console.log( "client : ", data );
        socket.emit('Response', 'study : 공부합시다'); 
    })
    socket.on("bye", function(data) {
        console.log( "client : ", data );
        socket.emit('Response', 'bye : 안녕히가세요'); 
    })
})

http.listen( 8000, function() {
    console.log( "Server port : " , 8000 );
});