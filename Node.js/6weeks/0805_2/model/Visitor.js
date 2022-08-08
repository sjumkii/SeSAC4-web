const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
}); //mysql의 내장 함수로 이 함수가 db를 연결시켜주는 함수. node.js에서 mysql을 사용할 대는 1개의 db만 사용이 가능하기 때문에 어떤 database를 사용할건지까지 명시해주어야 ㅎ나다.

exports.get_visitors = (cb) => { //컨트롤러에서 visitor.get_visitor로 보낸 함수를 여기서 받음
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb(rows);//콜백함수 실행할 때 나가 검색한 결과인 rows를 보내줌  컨트롤러   
    });
}//에러 실행시 err에 담겨오고 정상적으로 출력되면 rows. cnn.query는 req 객체. 실행되면 연결되는 것이 select*from visitor 이고 그 결과 나오는게 그 안의 함수 실행문

exports.insert = ( name, comment, cb ) => { //컨트롤러에서 3개의 값을 각각 name, commentm, cb로 받음
    var sql = "INSERT INTO visitor(name, comment)VALUES('" + name + "', '" + comment + "')"; 
    cnn.query( sql, function(err, rows) { //rows가 id를 프라이ㅓ리 키로 받음
        if ( err ) throw err;

        console.log( rows );
        cb( rows.insertId ); //컨트롤러에서 받음 
    });
}

exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id인 데이터를 1개만 검색한다.
    cnn.query( `select * from visitor where id = ${id} limit 1;` , (err, rows) => {
        if( err ) throw err;
        cb( rows );
    });
}

exports.update = (data, cb) => {
    let sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id =${data.id}`;
    cnn.query( sql, (err, rows) => {
        if( err ) throw err;
        cb( rows );
    })
}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}

// exports.update = ( name, comment, cb ) => {
//     var sql2 = "UPDATE visitor SET name = '" + name + "', comment = '" + comment + ";
//     cnn.query()
// }

// exports.delete = ( name, comment, cb ) => {
//     var sql3 = "DELETE FROM visitro WHERE id = '" + rows.insertID + "'"
// }