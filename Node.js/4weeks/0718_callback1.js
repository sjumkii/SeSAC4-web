console.log( "start" );

function login(id, pw, cd) {
    setTimeout(() => {
        console.log( '정보없음' );
        cd ( id ); //너가 하고 싶은 작업 다 끝나면 id 힘수를 실행시켜 주어라
    }, 3000 );
}

const user  = login('kim', '1234', user => {
    console.log(user + "님 반갑습니다.");
});


console.log("finish");