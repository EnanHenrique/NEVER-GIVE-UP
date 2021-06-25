create database NeverGiveUp;

use NeverGiveUp;

-- drop database NeverGiveUp;

create table Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
	login VARCHAR(40),
    senha VARCHAR(16),
    email VARCHAR(60),
    dataNascimento DATE
);

insert into Usuario values (null, 'Enan Oliveira', 'enan.oliveira', 'senhaenan', 'enan.oliveira@bandtec.com.br', '2000-02-08'),
						   (null, 'Silvia Oliveira', 'silvia.oliveira', 'senhasilvia', 'silvia.oliveira@gmail.com', '1960-08-07');

create table AutoConhecimento (
	idAutoConhecimento int primary key auto_increment,
    timidez VARCHAR(150),
    oratoria VARCHAR(150),
    quebraDeExpectativa VARCHAR(150),
    solidao VARCHAR(150),
    saudade VARCHAR(150),
    felicidade VARCHAR(150),
    conquista VARCHAR(150),
    fkUsuario INT,
	foreign key (fkUsuario) references Usuario(idUsuario)
) auto_increment = 1000;



create table PessoaMelhor (
	idPessoaMelhor int primary key auto_increment,
    timidez VARCHAR(150),
    oratoria VARCHAR(150),
    quebraDeExpectativa VARCHAR(150),
    solidao VARCHAR(150),
    saudade VARCHAR(150),
    felicidade VARCHAR(150),
    conquista VARCHAR(150),
    fkUsuario INT,
	foreign key (fkUsuario) references Usuario(idUsuario)
) auto_increment = 10000;



create table estado_emocional (
	idEstadoEmocional int primary key auto_increment,
    estado_emocional varchar(15),
    fkUsuario INT,
	foreign key (fkUsuario) references Usuario(idUsuario)
) auto_increment = 100;

create table opiniao_usuario (
	idOpiniaoUsuario int primary key auto_increment,
    nota char(1),
    fkUsuario int,
    foreign key (fkUsuario) references Usuario (idUsuario)
) auto_increment = 200;

create table EstadoEmocinalUsuario (
	fkEstadoEmocional int,
    fkUsuario int,
    dataEmocinal date,
    primary key (fkEstadoEmocional, fkUsuario),
    foreign key (fkEstadoEmocional) references estado_emocional (idEstadoEmocional),
    foreign key (fkUsuario) references Usuario(idUsuario)
);

create table OpiniaoUsuario (
	fkOpiniaoUsuario int,
    fkUsuario int,
    dataOpiniao date,
    primary key (fkOpiniaoUsuario, fkUsuario),
    foreign key (fkOpiniaoUsuario) references opiniao_usuario(idOpiniaoUsuario),
    foreign key (fkUsuario) references Usuario(idUsuario)
);

insert into AutoConhecimento values 
	(null, 'Sempre deixo ela tomar conta de mim e acabo nao conseguindo dar o meu melhor '  ,
	'Sinto um certo desconforto ao falar em publico ou com estranhos',
    'Não costumo criar muitas expectivas sobre algo então a quebra delas não é algo impactante em mim',
    'Solidão é algo que me deixa para baixo um pouco',
    'É algo que nao me afeta muito também por não me apegar muito as pessoas',
    'Aproveito sozinho a felicidade o maximo que posso',
    'Gera a felicidade em que gera um orgulho também', 2
);

insert into PessoaMelhor values
	(null, 'Deixar ela de lado e dar sempre meu melhor sem pensar no que os outros vao falar ',
	'Falar com todos em qualquer hora e momento mesmo em publico',
    'Não se emportar com a perca de algo, porque sempre pode ter algo melhor por vir',
    'Esquecer a solidão e saber que tenho vários companheiros sensacionais nessa caminhada',
    'Saber que tudo tem o seu tempo',
    'Agradecer a Deus e a todos pela felicidade que estou no momento',
    'Agradecer a todos que me ajudaram na conquista e reconhecê-los', 2
);

SELECT 
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
    WHERE fkUsuario = 2
    ORDER BY autoconhecimento.idAutoConhecimento DESC;

-- SELECTS ↓
 select * from Usuario;

 select * from AutoConhecimento;

 select * from PessoaMelhor;

 select * from estado_emocional;

 select * from opiniao_usuario;
 
 select * from estado_emocional_opinao_usuario;

 select * from Usuario inner join AutoConhecimento on fkUsuario = idUsuario ; -- Usuarios e seus respectivos auto onhecimentos

 select * from Usuario inner join PessoaMelhor on fkUsuario = idUsuario ; -- Usuarios e suas respectivas versões de melhores pessoas

select * from Usuario inner join estado_emocional on fkUsuario = idUsuario; -- Usuarios e seus respectivos estados emocionais

select * from Usuario inner join opiniao_usuario on fkUsuario = idUsuario; -- Usuarios e suas respectivas opinioes sobre o site em notas de 0 a 5