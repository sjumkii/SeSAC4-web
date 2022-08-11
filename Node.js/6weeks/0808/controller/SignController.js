const Sign = require("../model/Sign");
const { route } = require("../routes");

exports.signup = (req, res) => {
        res.render("signup")
}

exports.post_signup = (req, res) => {
    Sign.post_signup( req.body, function(result) {
        res.send(true);
    });
}

exports.login = (req, res) => {
    res.render("login");
}

// exports.post_login = (req, res) => {
//     Sign.post_login( req.body.id, req.body.pw, function(result){
//         if ( result.length > 0 ) res.send(true);
//         else res.send(false);
//     })
// }

// exports.info = (req,res) => {
//     Sign.get_info(req.body.id, function(result){
//         if ( result.length > 0 ) res.render("info", {data: result[0]});
//         else res.redirect("/sign/login");
//     })
// }

exports.info_update = (req, res) => {
    Sign.info_update( req.body, function(result) {
        res.send("수정이 완료되었습니다");
    })
}

exports.info_delete = (req, res) => {
    Sign.delete( req.body.id, function(result){
        console.log(result);
        res.send( "탈퇴가 완료되었습니다" );
    })
}