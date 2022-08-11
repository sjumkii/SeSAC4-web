const Visitor = (Sequelize, DataTypes) => {

    const model = Sequelize.define( 
        'visitor',
        {   
            id: { 
                type: DataTypes.INTEGER, 
                allowNull: false,
                primaryKey: true,
                autoIncrement: true, 
            },
            name: { 
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            Comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        {   
            timestamps: false, 
            tableName: 'visitor',
            freezeTablename: true, 
        }
    );
    return model; 
}

module.exports = Visitor;