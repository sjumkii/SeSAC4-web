function func1(callback) {
    callback();
}// fucn1은 callback이라는 변수로 파라미터를 받음. but 변수로 받았지만 거기에 들어온게 함수니까 실행할 수 있음
function fucn2(a){
    console.log( "안녕" );
}

func1(fucn2); //func1을 실행할건데 인자를 func2로 받음