let list = ['apple', 'banana'];

// let item1 = list[0];
// let item2 = list[1];

[item1, item2 = 'peach', item3 = 'melon'] = list;

console.log( "item1 :", item1 );
console.log( "item2 :", item2 );
console.log( "item3 :", item3 );

// 변수 바꾸기
let x = 1;
let y = 3;

/*지금까지의 변수 바꾸기 방법
let temp = x;
x = y;
y = temp;*/

// 더 간단하게 변수 바꾸기 
[x, y] = [y, x];





