let obj = {
    key1: "value1",
    key2: "value2",
    key3: function() {
        console.log( "a" );
    }
}; // 이런 객체가 있을 때 가져오는 방법

// 이렇게 중괄호 안에 변수를 넣어서 가져올 수 있음
const { key1: key00, key2, key3, key4= 'a' } = obj; // key1,2는 값을 가져오는 변수, key3는 함수를 가져오는 변수 //key1: key00 이렇게 콜론을 이용해서 가져올 변수 명을 바꿀수도 있음
key3();
console.log( key00 );

let obj2 = { a:1, b:2, c:3, d:4 };
const{ a, b, ...rest } = obj2; //이렇게 ...3개를 쓰면(전개연산자라고 함) 나머지 애들을 전부 가져올 수 있음

console.log( rest );