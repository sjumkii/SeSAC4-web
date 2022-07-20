const url = require("url");

const URL = url.URL; //url모듈 안에 있는 대문자 URL이라는 클래스를 실행시켜랴

const myURL = new URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9");

console.log( myURL.searchParams.keys() );
console.log( myURL.searchParams.values() );
myURL.searchParams.delete('sm');
console.log( myURL.searchParams.keys() );


