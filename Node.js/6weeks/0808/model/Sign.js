const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_signup = (cb) => {
    cnn.query( 'SELECT * FROM sign', (err, rows) => {
    if (err) throw err;
    console.log( rows );
    cb(rows);
    });
}

exports.insert = ( id, pw, name, num, email, cb ) => {
    var sql = "INSERT INTO sign(id, pw, name, num, email)VALUES('" + id + "', '" + pw + "', '" + name + "', '" + num + "', '" + email + "')";
    cnn.query( sql, function(err, rows) {
        if ( err ) throw err;

        console.log( rows ); 
        cb( rows.insertId )
    })
}

exports.get_info = (id, cb) => {
    cnn.query( `select * from sign where id = ${id} limit 1;` , (err, rows) => {
        if( err ) throw err;
        cb( rows );
    });
}

exports.update = (data, cb) => {
    let sql = `UPDATE sign SET id='${data.id}', pw='${data.pw}', name='${data.name}', num='${data.num}', email='${data.email}' WHERE id ='${data.id}'`;
    console.log( sql );
    cnn.query( sql, (err, rows) => {
        if( err ) throw err;
        cb( rows );
    })
}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM sign WHERE id='${id}'`, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}