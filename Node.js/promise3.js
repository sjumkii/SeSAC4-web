function call ( name ) {
    return new Promise( function (resolve, reject) {
        setTimeout( function() {
            console.log(name)
            resolve(name);
        }, 1000)
    });
}
function back( cb ) {
    return new Promise( function(resolve, reject) { //이 안의 함수가 resolve하게 실행된다면 then으로 콜백한다. 
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
        return back( );
    })
    .then( function(txt){
        console.log(txt + "을 실행했구나" );
        return hell( ) 
    })
    .then( function(message){
        console.log("여기는" + message)
    });

    //promise를 실행 해서 1초 후에 그 안에 있는 코드를 실행해라 그 코드가 실행될 때 resolve하게 실행된다면 then함수를 실행해라/ then실행 후 back 함수를 실행해라 