const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.signup = ( data, cb ) => {
    var sql = `INSERT INTO sign VALUES('${data.id}','${data.pw}','${data.name}', '${data.num}', '${data.email}')`;
    cnn.query( sql, function(err, rows) {
        if ( err ) throw err;
        cb( rows );
    });
}

exports.post_login = (id, pw, cb) => {
    let sql = `SELECT * FROM sign WHERE id=${id} and pw=${pw} limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb( rows );
    })
}

exports.get_info = (id, cb) => {
    let sql = `SELECT * FROM sign WHERE id=${id} limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.info_update = (data, cb) => {
    let sql = `UPDATE sign SET pw='${data.pw}', name='${data.name}', num='${data.num}', email='${data.email}', WHERE id='${data.id}'`;
    cnn.query( sql, ( err, rows ) => {
        if ( err ) throw err;
        cb( rows );
    })

}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM sign WHERE id='${id}'`, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}

