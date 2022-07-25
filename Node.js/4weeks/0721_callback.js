function dohomework( subject, callback ) {
    console.log( subject + '과목 숙제를 시작합니다.'); //1번
    callback();
}
dohomework( '코딩', function() {
    console.log( '코딩 숙제 끝!(1)' ); //2번
});
function finishHomework(){
    console.log('코딩 숙제 끝!(2)'); //3번
}
dohomework('코딩', finishHomework)