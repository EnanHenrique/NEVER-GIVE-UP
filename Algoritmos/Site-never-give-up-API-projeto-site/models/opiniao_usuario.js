'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let opiniao_usuario = sequelize.define('opiniao_usuario', {
        idOpiniaoUsuario: {
            field: 'idOpiniaoUsuario',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nota: {
            field: 'nota',
            type: DataTypes.CHAR,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: 'opiniao_usuario',
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        });

    return opiniao_usuario;
};
