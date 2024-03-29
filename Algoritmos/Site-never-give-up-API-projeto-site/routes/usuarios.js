var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var AutoConhecimento = require('../models').AutoConhecimento;
var PessoaMelhor = require('../models').PessoaMelhor;
var estado_emocional = require('../models').estado_emocional;
var opiniao_usuario = require('../models').opiniao_usuario;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.login; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from Usuario where login='${login}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function (req, res, next) {
	console.log('Criando um usuário');

	Usuario.create({
		nome: req.body.nome,
		login: req.body.login,
		senha: req.body.senha,
		email: req.body.email,
		dataNascimento: req.body.dataNascimento,
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* Inserir dados auto_conhecimento */
router.post('/inserir/:idUsuario', function (req, res, next) {
	console.log('Inserindo dados na tbl autoconhecimento');

	let idUsuario = req.params.idUsuario;

	AutoConhecimento.create({
		timidez: req.body.timidez,
		oratoria: req.body.oratoria,
		quebraDeExpectativa: req.body.quebraDeExpectativa,
		solidao: req.body.solidao,
		saudade: req.body.saudade,
		felicidade: req.body.felicidade,
		conquista: req.body.conquista,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Inserir dados PessoaMelhor */
router.post('/inserirPessoaMelhor/:idUsuario', function (req, res, next) {
	console.log('Inserindo dados na tbl PessoaMelhor');

	let idUsuario = req.params.idUsuario;

	PessoaMelhor.create({
		timidez: req.body.timidez,
		oratoria: req.body.oratoria,
		quebraDeExpectativa: req.body.quebraDeExpectativa,
		solidao: req.body.solidao,
		saudade: req.body.saudade,
		felicidade: req.body.felicidade,
		conquista: req.body.conquista,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* Inserir dado de estado emocional do usuario */
router.post('/inserir_estado_emocional/:idUsuario', function (req, res, next) {
	console.log('Inserindo dados na tbl dados de estado emocional do usuario');

	let idUsuario = req.params.idUsuario;

	estado_emocional.create({
		estado_emocional: req.body.estado_emocional,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Inserir dados na tbl opiniao_usuario */
router.post('/inserir_opiniao_usuario/:idUsuario', function (req, res, next) {
	console.log('Inserindo dados na tbl opiniao_usuario');

	let idUsuario = req.params.idUsuario;

	opiniao_usuario.create({
		nota: req.body.name_select_opiniao_usuario,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* Verificação de usuário */
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


/* Logoff de usuário */
router.get('/sair/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idUsuario = req.params.idUsuario;

    var instrucaoSql = `SELECT 
    usuario.nome,
    timidez,
    oratoria,
    quebraDeExpectativa,
    solidao,
    saudade,
    felicidade,
    conquista
    FROM autoconhecimento
    INNER JOIN usuario
    ON autoconhecimento.fkUsuario = Usuario.idUsuario
    WHERE fkUsuario = ${idUsuario}
    ORDER BY autoconhecimento.idAutoConhecimento DESC`;

	sequelize.query(instrucaoSql, {
		model: AutoConhecimento,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
