class Car {
    constructor(color) {
        //속성
        this.color = color;
    }
    //메소드
    brung() {
        console.log( this.color + "차");
    }
}

var car1 = new Car("빨간색");
var car2 = new Car("노란색");
var car3 = new Car("파란색");

car1.brung();
car2.brung();
car3.brung();