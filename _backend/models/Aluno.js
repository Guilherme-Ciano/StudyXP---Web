const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            id_aluno: { 
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING,
            },
            ra: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
            },
            phone: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            grade: {
                type: DataTypes.INTEGER,
            }, 
        }, {
            sequelize,
            tableName: 'aluno',
        })
    }
}

module.exports = Aluno;