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

    for(var i=0; i<line.length; i++) {
        var info = line[i];
        var data = info.split('//');
        

        if( data[0] == req.body.id && data[1] == req.body.pw )
        {
            res.send( "로그인 성공" );
            break;
        } 
        
        else if ( i == line.length-1 )
        {
            res.send( "로그인 실패" );
            break;
        } 
    }
}