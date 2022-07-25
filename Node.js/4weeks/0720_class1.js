class Cat {
    mew(){
        console.log("야옹");
    }  
}

var cat1 = new Cat(); //위의 cat 클래스를 이용하여 var cat1이라는 변수를 하나 만든것
var cat2 = new Cat(); //이렇게 클래스를 이용하서 같은 객체를 몇개씩 만들 수 있음

console.log( cat1 );
cat1.mew( );