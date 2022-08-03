const express = require("express");
const userRouter = express.Router(); //이 Router() 함수는 내가 선언한 것은 아니고 원래 express 안에 내장 되어 있는 함수이다. 즉 userRouter라는 변수를 사용할 경우 express안에 있는 Router라는 함수를 사용하겠다는 의미 
const user = require("../controller/UserController");

userRouter.get("/", user.index); 

userRouter.get("/register", user.register);
userRouter.post("/register", user.post_register);

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);
// 여기 적힌 rgister, login 등의 경로들은 ejs 파일에 적힌 경로들. 즉, 해당 경로의 ejs 파일이 열릴 경우 컨트롤러(user).함수(register, idnex...)를 실행한다는 것

module.exports = userRouter;
// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.

