// express 패키지를 호출하여 app 변수 객체 생성
const express = require( 'express' ); 
const app = express() 

// port 변수에 포트번호 8080 저장
const port = 8080; 
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done( mull, 'uploads/');
        },
        filename( req, file, done ) {
            const ext = path.extname( file.originalname );
            const fileName = path.basename(req.body.id + ext)
            done( null, fileName );
        }
    }),
    limits: { fileSize: 5*1024*1024 }
})

// express 앱을 설정
app.set( 'view engine', 'ejs' );

// 미들웨어 연결
app.use( express.static( 'public' ) );
//app.use( '/abc', express.static( 'public' )); //가상경로를 지정한 경우 
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json())

// .get 메소드
app.get("/", (req, res) => { 
    // app.get으로 request에 대한 response를 지정할 수 있다.
    // "/"는 루트 경로에 대한 요청을 의미한다
    // req와 res를 받아서 { } 안의 내용을 실행한다
    console.log('루트에 대한 요청이 들어왔다1');
    res.send('루트에 대한 요청이 들어왔다2');
})

app.get("/about", (req, res) => {
    // "/about" /about 경로에 대한 요청을 의미한다 
    // 이렇게 경로를 지정 할 수도 있다. 
    console.log('about에 대한 요청이 들어왔음1');
    res.send('about에 대한 요청이 들어왔음2');
})

// multer 양식
app.get("/upload", upload.single('userfile'), function(req, res) {
    console.log( req.body );
    console.log( req.file );
    res.send( "upload" );
})

app.post("/upload", upload.single('userfile'), function(req, res) {
    console.log( req.body );
    console.log( req.file );
    res.send( "upload" );
})

// port와 연결
app.listen(port, () => {
    console.log( 'Server Port : ', port);
})