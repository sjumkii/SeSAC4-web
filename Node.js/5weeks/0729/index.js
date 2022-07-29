const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require( "body-parser" );
const path = require("path");
const multer = require("multer");
const upload = multer({
    //dest: "uploads/", // dest 라는 속성으로 파일을 업로드 할 위치를 정해줄 수 있음
    storage: multer.diskStorage({
        destination(req, file, done) {
            done( null, 'uploads/');
        },
        filename( req, file, done ) {
            const ext = path.extname( file.originalname ); //extname 확장자 명 
            const fileName = path.basename(req.body.id + ext)
            done(null, fileName );
        },
    }),
    limits: { fileSize: 5*1024*1024 }, //최대 이정도 사이즈의 파일을 업로드 하겠다
});

app.set( "view engine", "ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", test, test2, function(req, res) { // "/"로 접속하고 test로 접속했다가 test2로 접속했다 원래하려던 작업; 원래의 함수로 가게 하는 것; 원래의 함수로 가기 전에 거치게 하는 것을 미들웨어라고 한다
    res.render("index");
})
app.post("/upload", upload.single('userfile'), function(req, res) { //uploads에는 객체가 많은데 그중 하나가 upload.single, single은 한개의 파일만 업로드 될 수 있게 도와줌. 업로드를 처리한 후에 그 파일에 대한 정보를 req.file 이라는 곳에 담아서 넘긴다 
    console.log(req.body);
    console.log( req.file );
    res.send("Upload")
})
app.post("/upload/array", upload.array("userfile"), function(req, res) { //파일 여러개 업로드 하는 경우 
    console.log(req.body);
    console.log( req.files ); //파일을 여러개 업로드 하니까 's' 붙여주어야 함. 
    res.send("Upload Array")
})
app.post("/upload/fields", upload.fields([{name: 'userfile1'}, {name: 'userfile2'}, {name: 'userfile3'}]), function(req, res) { // 종류가 다른 파일을 서로 다른 칸에 업로드 하고 싶을 때; 장학금 신청 할 때 영어성적 제출 칸이랑 신청서 제출 칸이 다른 것처럼
    console.log( req.body );
    console.log( req.files );
    res.send("Upload fields")
})

//++ none()이라는 함수도 있는데 이것은 파일을 넣어도 업로드 하지 않겠다는 함수

function test(req, res, next) {
    console.log( "test 함수" );
    console.log( req.path ); // 어떤 경로로 왔는지 찍어라
    req.aaa = "........";
    next(); // next 함수를 이용해서 다음걸로 찍어라 
}
function test2(req, res, next) {
    console.log( "test2 함수" );
    console.log( req.aaa );
    next();
}
app.listen(port, () => {
    console.log( "Server Port : ", port);
})