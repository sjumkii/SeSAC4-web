const Sign = require("../model/Sign");
const { route } = require("../routes");

exports.get_signup = (req, res) => {
    Sign.get_signup(function(result){
        console.log( "result: ", result );
        res.render("signup", { data: result });
    })
}

exports.post_signup = (req, res) => {
    console.log( req.body );

    Sign.insert( req.body.id, req.body.pw, req.body.name, req.body.num, req.body.email, function(result) {
        res.send( {id: result} );
    });
}

exports.get_info = (req, res) => {
    Sign.get_info( req.query.id, function(result) {
        console.log( "result : ", result );
        console.log( "result[0] : ", result[0]);
        res.send({ result : result[0] });
    })
}

exports.patch_info = (req, res) => {
    Sign.update( req.body, function(result){
        console.log( result );
        res.send( "수정 성공" );
    })
}

exports.delete_info = (req, res) => {
    Sign.delete( req.body.id, function(result){
        console.log(result);
        res.send( "삭제 성공" );
    })
}