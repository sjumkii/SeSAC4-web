const express = require('express');
const cookieparser = require( 'cookie-parser' );
const session = require('express-session');
const app = express();

app.set("view engine", "ejs");
app.use( cookieparser('1234') );
app.use(session({
    secret: 'secret key',
    // resave: false, //덮어쓰기 안하게 하는 속성
    // saveUninitialized: true
}));

app.get("/login", (req, res) => {
    res.render("login");
});

//버튼 누르면 post로 받아옴
app.post("/login", (req, res) => { //여기서 아이디와 비번을 받아오고 검사함
    var flag = true; //검사해서 아이디와 회원이 일치하는 경우를 찾음
    if ( flag ) { 
        req.session.id = req.body.id;
        res.redirect("profile"); //아래의 app.get프로필로 이동한다
    } else res.redirect("login"); //페이지를 다시 보여줘라
});

app.get("/profile", (req, res) => {
    if( req.session.id == undefined || req.session.id == "" ){ //id가 undefined거나 비어있으면 로그인 다시하게 하라
        res.redirect("/login");
        return false;
    }
    req.session.id //로 작업 ~~
    res.render("prifile");
})

app.get("/main", (req, res) => {

})

// const cookieConfig = {
//     maxAge: 30000, // 만료 기간을 설정한 것으로 30초를 의미함
//     path: '/', //만약 경로를 /get이라고 설정해놓으면 /get/~~~ 인 경로들만 볼수 있음; 여기서는 /를 시작경로로 설정하였으므로 /~~~~인 경로는 다 볼 수 있음.
//     httpOnly: true,
//     signed: true // 쿠키를 암호화해서 사용하는 옵션
// };

// app.get("/", (req, res) => {
//     req.session.name = "홍길동";
//     res.cookie('key', 'value', cookieConfig); //쿠키를 실행할 때 첫번째 인자가 이름이고 두번째 인자가 실제 값. 그리고 키 벨류 빼고 옵션을 딕셔너리로 만들어 보낼 수 있다. 
//     res.cookie('key2', 'value2', cookieConfig);
//     res.render("index");
// });

// app.get("/get", (req, res) => {
//     console.log(req.session.name);
//     console.log( req.cookies );
//     res.send( req.cookies );
// })

// app.get("/destroy", (req, res) => {
//     // res.render("cookie");
//     // req.session.destroy(function(err){
//     //     res.send("삭제");
//     // })
//     req.session.name = "";
//     res.send("123");
// })

// app.get("/cookie", (req, res) => {
//     res.render( "cookies" );
// })

app.listen(8000, () => {
    console.log( 'Server Port : ', 8000 );
})