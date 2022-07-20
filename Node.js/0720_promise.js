function promise(flag) {
    return new Promise ( function ( resolve, reject ){
        if(flag) {
            resolve( "then으로 연결");
        } else {
            reject("catch로 연결");
        }
    });
}

promise(true)
    .then( function(result){
        console.log( "then : ", result);
    })
    .catch( function(err) {
        console.log( "catch :", err );
    });

promise(false)
    .then( function(result){
        console.log( "then : ", result);
    })
    .catch( function(err) {
        console.log( "catch :", err );
    });    