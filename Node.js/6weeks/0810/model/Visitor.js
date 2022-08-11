const Visitor = (Sequelize, DataTypes) => {
    //Sequelizesms model/index.js에서의 sss
    //DataTypes는 model/index.js에서의 Sequelize

    const model = Sequelize.define( //define함수는 Sequlize에 내장됨
        'visitor',
        {   // create ~~ (id int not null autoo_increment primary key)
            id: { 
                type: DataTypes.INTEGER, //int라고 정의하는 것
                allowNull: false,
                primaryKey: true,
                autoIncrement: true, // 이렇게 지정하면 auto_increment라고 지정해준 것과 같다
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            Comment: {
                type: DataTypes.TEXT('medium')
            }// visitor라는 것은 컬럼을 3개 가지고 있다. 
        },
        {   
            timestamps: false, //timestamps를 true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다. 
            tableName: 'visitor',
            freezeTablename: true, //테이블 이름은 바꾸지 말기를 원할때 사용하는 속성
        }
    );
    return model; //model만들었으면 내보내기
}

module.exports = Visitor;