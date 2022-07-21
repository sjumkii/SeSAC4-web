function promise1(flag) {
    return new Promise( fucntion( resolve, reject ){
        if ( flag ) {
            resolve( "promise 상태는 fulfilled. then으로 연결됩니다. 이때의 flag가 true입니다." );
        } else {
            reject( "promise 상태는 rejec. catch로 연결됩니다. 이떄의 flag는 false입니다.");
        }
    })
};

promise1(true)
    .then(fucntion(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    });