const express = require('express');
const app = express();
const port = 8080;


app.use( express.static( 'public' )); //public이라는 곳을 정적 파일 관리하는 곳이다 라고 정의해 놓는 것 ; 프로젝트에 사용할 파일들이 static이라는 값 안에 있다고 정의한 것. 따라서 아무것도 쓰지 않고 파일 이름만 적어도 public에 있는 같은 이름의 파일을 찾는 것

app.get('/', (req,res) => {
    res.send( 'Hello Express!' );
});

app.listen(port, () => {
    console.log( 'Server port : ', port);
});


/*app.use( '/abc', express.static( 'public' )); //+ /abc라는 가상 경로는 만든 것. 이것은 public에 접근할 것인데 거기에 접근하는 가상 경로를 abc로 하겠다는 것; abc가 public을 대체하는 것. 

app.get('/a', (req,res) => {
    res.send( 'Hello Express!' );
});

app.listen(port, () => {
    console.log( 'Server port : ', port);
});

//따라서 이경우는 ㅈㅜ소창에 /abc/aa/grass.png라고 입력해야 됨*/ 