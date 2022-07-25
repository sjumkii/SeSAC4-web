/*function func() {
    return new Promise(function(resolve, reject) {
        resolve(1);
    });
}

func().then(function(result){console.log( result ); });*/

//=

async function func(){
    return 1;
}
func().then(function(result){console.log( result ); });

