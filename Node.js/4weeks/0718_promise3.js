function call ( name ) {
    return new Promise( function (resolve, reject) {
        setTimeout( function() {
            console.log(name)
            resolve(name);
        }, 1000)
    });
}
// promise {"kim"}

function back( cb ) {
    return new Promise( function(resolve, reject) { //이 안의 함수가 resolve하게 실행된다면 then으로 콜백한다. ; then으로 받을 수 있다
        setTimeout( function() {
            console.log("back")
            var a = 'back'
            resolve( a );
        }, 1000);
    });
}
function hell( cb ) {
    return new Promise( function (resolve, reject) {
        setTimeout( function() {
            resolve( 'callback hell' );
        }, 1000);
    });
}
call( 'kim' )
    .then( function(name){
        console.log(name + '반가워');
        var a = back().then();//back에서 실행한 결과값은 back의 결과값이 드어감
        return a; //이코드까지 와주어야.then을 받고 다음 then이 실행 됨. 
        //Promise { "back" }
        //return back( );
    })
    .then( function(txt){
        console.log(txt + "을 실행했구나" );
        return hell( ) 
    })
    .then( function(message){
        console.log("여기는" + message)
    });

    //promise를 실행 해서 1초 후에 그 안에 있는 코드를 실행해라 그 코드가 실행될 때 resolve하게 실행된다면 then함수를 실행해라/ then실행 후 back 함수를 실행해라 \\

    //resolve를 했기 때문에 then으로 간다. 이 then에서 ㅎ마수로 받는 paracmeter는 