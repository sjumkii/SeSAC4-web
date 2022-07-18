const obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.log(obj["out"]["in"]);
console.time("시간");


console.time("시간");

console.error("에러!");

console.trace("Error");

console.table([{name: 'abc',  birth: 1990}, {name: 'def', birth: 1980}]);

console.dir(obj, {colors: true, depth: 2}); //obj가 색깔로 구분해서 구분할건지 그 깊이는 어디까지인지
console.dir(obj, {colors: false, depth: 1});

console.timeEnd("시간");


//출력하는데 어떤 콘솔을 이용하여 출력하는 것인가