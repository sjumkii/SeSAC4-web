const func1 = new Promise( ( resolve, reject ) => { //promise함수 선언. resolve는 안에있는 모든 작업이 성공할 경우 실행하는 함수, reject는 안에 있는 모든 작업이 실패했을 대의 함수
    var flag = true;
    if (  flag ) resolve( "성공" );
    else reject( "실패" );
})

func1.then( value => { //성공할 경우 then에 들어옴
    return value + "1"; //첫번재 then에서 return을 시키면 아래의 then에서 받음
}).then(result => {
    console.log(result);
}).catch( err => { //실패할 경우 catch에 들어옴
    console.log( err );
});

func1.then( function(value){
    return value + "1";
}).then( function)