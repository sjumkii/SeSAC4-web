function login(id, pw) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    });
}
function getVideo(id) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}
function getDetail(video) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            resolve("비디오 제목은 :" + video);
        });
    });
}
async function exec() {
    let user = await login('kim', '1234');
    console.log( 'user님 환영' );
    let videos = await getVideo(user);
    console.log( videos );
    let title = await getDetail(videos[0]);
    console.log( title );
} //await를 붙여주면 login을 받으면 그 다음에 다음것(getvideo)을 실행, 또 그 다음에 getDetail을 실행. 즉 복잡했던 promise 코드를 간단하게 실행할 수 있는 것
//선언할 때는 async 실행할 때는 await를 붙여주는 것

exec();