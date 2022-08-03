const model = require("../model/model");

exports.index = (req, res) => {
    res.render("index");
}

exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    model.post_user(req.body);
    //res.send( req.body );
    res.send("회원가입 성공");
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) => {
    var data = await model.get_user();

    var info = data.split('//');

    if ( info[0] != req.body.id ){
        res.send( "아이디가 다름" );
    } else if ( info[1] != req.body.pw ){
        res.send( "비밀번호가 다름" );
    } else {
        res.send( "로그인 성공!" );
    }
    console.log( data );
}