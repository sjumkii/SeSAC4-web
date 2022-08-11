const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"]; 
//const.json.에서 development를 가져왔다

// const a = require("../config/config.json");
// const a = {

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); //config에 정의해놨기 때문에 이렇게 사용할 수 있음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// const db = { "sequelize": sss, "Sequelize": Sequelize };

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// model/Visiotr.js에서 함수가 실행되고 return 된 model
// db = { Visitor: "model/Visitor.js에서의 model"}

module.exports = db;
// module.exports = { "sequelize": sss, "Sequelize": Sequelize }
// const { sequelize } = requeir("./model")
