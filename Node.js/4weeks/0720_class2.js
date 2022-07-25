class Cat {
    constructor( name ){
        this.name = name; //여기서의 this는 클래스 자체를 의미함
    }
    mew(){
        console.log( this.name + "야옹");
    }  
}

var cat1 = new Cat("나비"); //여기서 만든 값을 위의 constructor에서 받는 것
var cat2 = new Cat("냥이"); 

console.log( cat1 );
cat1.mew( ); //나비라는 속성을 보내서 cat이라는 객체를 만들어낸 것
cat2.mew( ); //냥이라는 속성을 보내서 cat이라는 객체를 만들어낸 것



