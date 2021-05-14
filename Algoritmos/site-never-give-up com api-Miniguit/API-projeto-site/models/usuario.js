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
			allowNull: true
		},		
		login: {
			field: 'login',
			type: DataTypes.STRING,
			allowNull: true
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: true
		},
		dataNascimento: {
			field: 'dataNascimento',
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		fkAutoConhecimento: {
			field: 'fkAutoConhecimento',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		fkPessoaMelhor: {
			field: 'fkPessoaMelhor',
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
