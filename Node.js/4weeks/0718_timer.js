const func1 = setTimeout( () => {
    console.log(" 1.5초 후 실행 ");
}, 1500);

const func2 = setInterval( () => {
    console.log(" 1초마다 반복 ");
}, 1000);

const func3 = setTimeout( () => {
    console.log(" func3 실행 ");
}, 3000); //3초 후에 실행하는 함수

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500); //2.5초 후에 func2함수 멈춤

const func4 = setImmediate( () => {
    console.log(" func4 즉시 실행 ");
});

const func5 = setImmediate( () => {
    console.log(" func5 즉시 실행 ");
}); 
clearImmediate(func5); //실행 전에 멈추라는 얘기가 있으니 즉시 실행하지 않음

console.log(__filename)
console.log(__dirname) 

