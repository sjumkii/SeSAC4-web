const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_visitor = (cb) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb( rows );
    });
}

exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor(name, comment)VALUES('" + name + "', '" + comment + "')";
    cnn.query( sql, function(err, rows) {
        if( err ) throw err;
        console.log( rows );
        cb( rows.insertId );
    })
}

// exports.delete = ( cb ) => {
//     var del = "DELETE FROM visitro WHERE id = '" + rows.insertID + "'";
//     cnn.query( del, function(err, rows) {
//         if( err ) throw err;
//         console.log( rows );
//         cb( rows )
//     })
// }