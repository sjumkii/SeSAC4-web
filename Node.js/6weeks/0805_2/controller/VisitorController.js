const Visitor = require("../model/Visitor");
const { route } = require("../routes");

exports.get_visitors = (req,res) => {
    Visitor.get_visitors(function(result){
        console.log( "result : ", result ); //visitor.js에서 cb에 담아 rows로 보낸 것을 result로 받음
        console.log( 'index' );
        res.render("index", { data: result }); //이 data를 키:벨류로 보냈기 때문에 ejs에서 받을 수 있음
    });
}

exports.post_comment = (req, res) => {
    console.log( req.body );

    Visitor.insert( req.body.name, req.body.comment, function(result) {
        res.send( {id: result} ); //값을 3개 보냄 name, comment 함수 이렇게 3개를 모델로 보냄. 즉 딕셔너리 형태로 클라이언트에게 응답한 것
    });
}

exports.get_visitor = (req, res) => {
    Visitor.get_visitor( req.query.id, function(result) {
        console.log("result : ", result );
        console.log( "result[0] : ", result[0])
        res.send( { result : result[0] } );
    })
}

exports.patch_comment = (req, res) => {
    Visitor.update( req.body, function(result){
        console.log( result );
        res.send( "수정 성공" );
    });
}

exports.delete_comment = (req, res) => {
    Visitor.delete( req.body.id, function(result){
        console.log( result );
        res.send( "삭제성공" );
    })
}
    // Visitor.update( )

    // Visitor.delete()


// function test(cb) {
//     cb(12);
// }

// test( function(abc){
//     console.log( abc );
// });