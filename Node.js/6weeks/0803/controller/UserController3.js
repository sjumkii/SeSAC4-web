const model = require("../model/model");

exports.index = (req,res) => {
    res.render("index");
}
exports.register = (req,res) => {
    res.render("register");  
}

exports.post_register = (req,res) => {
    model.post_user(req.body);
    res.send("회원가입 성공");
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) => {
    var data = await model.get_user();

    var line = data.split("\n")

    var flag = flase;

    for(var i=0; i<line.length; i++) {
        var info = line[i].split('//');
        
        if( info[0] == req.body.id && info[1] == req.body.pw ) flag = true;
    }
    if ( flag ) res.send( "로그인 성공" );
    else res.send("실패");
}