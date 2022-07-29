const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

app.set("view engine", "ejs");
app.use( express.static ("uploads") ); // 가상 경로를 설정해줄 수도 있다. 가상경로를 설정해주는 경우는 이제 파일이 다양하고 여러가지가 있을 때 분류를 위해 사용한다. 
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            console.log( "destination : ", req.body );
            done( null, 'uploads/');
        },
        filename( req, file, done ) {
            const ext = path.extname( file.originalname ); 
            done( null, req.body.id + ext );
        },
    }),
    limits: { fileSize: 5*1024*1024 },
})

app.get("/", function(req, res){
    res.render("sign")
})

app.post("/sign", upload.single('userfile'), function(req, res) {
    console.log(req.body)
    console.log(req.file)
    res.render( "img", {filename: req.file.filename } );
})

app.listen(port, () => {
    console.log("server port: ", port );
})