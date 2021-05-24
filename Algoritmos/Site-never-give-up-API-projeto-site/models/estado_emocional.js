'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let estado_emocional = sequelize.define('estado_emocional', {
        idEstadoEmocional: {
            field: 'idEstadoEmocional',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado_emocional: {
            field: 'estado_emocional',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: 'estado_emocional',
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        });

    return estado_emocional;
};
