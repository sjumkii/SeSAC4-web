function login(id, pw, cb) {
    setTimeout(() => {
        console.log( '사용자 입장' );
        cb ( id ); 
    }, 3000 );
}

function getVideo( id, cb ) {
    setTimeout(() => {
        cb( ['아이언맨1', '아이언맨2']);
    }, 2000);
}
function getDetail( video, cb ) {
    setTimeout(() => {
        cb( "비디오 제목은 : " + video );
    }, 1000);
}
login('kim', '1234', user => {
    console.log( 'user님 환영' );
    getVideo( user, (videos) => {
        console.log( videos );
        getDetail(videos[0], title => {
            console.log(title);
        });
    });
});

//login 실행 - setTimeout 실행되어 3초 기다림 - '사용자 입장' - callback함수 실행 되어 user환영 + 2초 후에 배열 보내고 있음; videos에 배열 들어옴 - 또 [0]배열 보내주고 있음; 아이언맨 1이 들어옴