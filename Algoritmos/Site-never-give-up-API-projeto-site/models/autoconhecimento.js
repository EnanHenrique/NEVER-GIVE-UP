'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let AutoConhecimento = sequelize.define('AutoConhecimento',{
		idAutoconhecimento: {
			field: 'idAutoconhecimento',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		timidez: {
			field: 'timidez',
			type: DataTypes.STRING,
			allowNull: false
		},		
		oratoria: {
			field: 'oratoria',
			type: DataTypes.STRING,
			allowNull: false
		},
		quebraDeExpectativa: {
			field: 'quebraDeExpectativa',
			type: DataTypes.STRING,
			allowNull: false
		},
		solidao: {
			field: 'solidao',
			type: DataTypes.STRING,
			allowNull: false
		},
		saudade: {
			field: 'saudade',
			type: DataTypes.STRING,
			allowNull: false
		},
		felicidade: {
			field: 'felicidade',
			type: DataTypes.STRING,
			allowNull: false
		},
		conquista: {
			field: 'conquista',
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
		tableName: 'AutoConhecimento', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return AutoConhecimento;
};
