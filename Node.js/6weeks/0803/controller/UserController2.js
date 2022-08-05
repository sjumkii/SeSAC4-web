


// const model = require("../model/model");

// exports.index = (req,res) => {
//     res.render("index");
// }
// exports.register = (req,res) => {
//     res.render("register");  
// }

// exports.post_register = (req,res) => {
//     model.post_user(req.body);
//     res.send("회원가입 성공");
// }

// exports.login = (req, res) => {
//     res.render("login");
// }

// exports.post_login = async (req, res) => {
//     var data = await model.get_user();

//     var line = data.split("\n")
//     // { "jisu1019", "els", "ddf", "{age}"}

//     var list = []

//     for(var i=0; i<line.length; i++) {
//         list.push(line[i].split("//"));
//     }
//     console.log(list);


//     for(var j=0; j<list.length; j++){
//         for(var i=0; i<list[j].length; i++){
//         if ( list[j][i] = [req.body.id][req.body.pw]) {
//             res.send( "로그인 성공" );
//         } else {
//             res.send( "로그인 실패" );
//         };
//     };
// }
// }
        

        