	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},		
		login: {
			field: 'login',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNascimento: {
			field: 'dataNascimento',
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		fkAutoConhecimento: {
			field: 'fkAutoConhecimento',
			foreignKey: true,
			// autoIncrement: 1000,
			type: DataTypes.INTEGER,
			allowNull: true
		},
		fkPessoaMelhor: {
			field: 'fkPessoaMelhor',
			foreignKey: true,
			// autoIncrement: 10000,
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, 
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
