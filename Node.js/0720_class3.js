class Car {
    constructor() {
        this.isWheel = true;
        this.isDoor = true;
    }
    go(){
        console.log( "전진" );
    }
    back(){
        console.log("후진");
    }
    returnColor() {
        return this.color;
    }
}

/*var car1 = new Car("red");
var car2 = new Car("orange");
var car3 = new Car("yellow");
var car4 = new Car("green"); //class라는 틀을 이용해서 여러개의 다른 차를 만들 수 있는 것*/

module.exports = { Car };
