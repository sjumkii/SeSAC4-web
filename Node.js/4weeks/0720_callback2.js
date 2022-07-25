//callback1에서 한것을 이렇게 합쳐서 사용할수도 있음

function func1(callback) {
    callback();
}

func1(function a() {
    console.log( "안녕" );
}); //이렇게 인자로 보내는 곳에서 함수를 선언해서 하나로 사용할 수 있는 것