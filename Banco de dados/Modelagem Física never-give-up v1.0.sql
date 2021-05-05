create database NeverGiveUp;
use NeverGiveUp;

create table Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40),
	login VARCHAR(40),
    senha VARCHAR(16),
    dataNascimento DATE,
    fkAutoConhecimento int,
    foreign key (fkAutoConhecimento) references AutoConhecimento (idAutoConhecimento),
    fkPessoaMelhor int,
    foreign key (fkPessoaMelhor) references PessoaMelhor (idPessoaMelhor)
);

insert into usuario value (null, 'enan.oliveira@bandtec.com.br', 'enanlinares', 'Enan@011', '2000-02-08', 1000, 10000);

create table AutoConhecimento (
	idAutoConhecimento int primary key auto_increment,
    timidez VARCHAR(100),
    oratoria VARCHAR(100),
    quebraDeExpectativa VARCHAR(100),
    solidao VARCHAR(100),
    saudade VARCHAR(100),
    felicidade VARCHAR(100),
    conquista VARCHAR(100)
) auto_increment = 1000;

insert into AutoConhecimento values 
	(null, 'Sempre deixo ela tomar conta de mim e acabo nao conseguindo dar o meu melhor '  ,
	'Sinto um certo desconforto ao falar em publico ou com estranhos',
    'Não costumo criar muitas expectivas sobre algo então a quebra delas não é algo impactante em mim',
    'Solidão é algo que me deixa para baixo um pouco',
    'É algo que nao me afeta muito também por não me apegar muito as pessoas',
    'Aproveito sozinho a felicidade o maximo que posso',
    'Gera a felicidade em que gera um orgulho também'
);

create table PessoaMelhor (
	idPessoaMelhor int primary key auto_increment,
    timidez VARCHAR(100),
    oratoria VARCHAR(100),
    quebraDeExpectativa VARCHAR(100),
    solidao VARCHAR(100),
    saudade VARCHAR(100),
    felicidade VARCHAR(100),
    conquista VARCHAR(100)
) auto_increment = 10000;

insert into PessoaMelhor values
	(null, 'Deixar ela de lado e dar sempre meu melhor sem pensar nos possiveis erros',
	'Falar com todos em qualquer hora e momento mesmo em publico',
    'Não se emportar com a perca de algo, porque sempre pode ter algo melhor por vir',
    'Esquecer a solidão e saber que tenho vários companheiros sensacionais nessa caminhada',
    'Saber que tudo tem o seu tempo',
    'Agradecer a Deus e a todos pela felicidade que estou no momento',
    'Agradecer a todos que me ajudaram na conquista e reconhecê-los'
);

select * from Usuario;

select * from AutoConhecimento;

select * from PessoaMelhor;

select * from Usuario inner join AutoConhecimento on fkAutoConhecimento = idAutoConhecimento; -- Usuarios e seus respectivos auto onhecimento

select * from Usuario inner join PessoaMelhor on fkPessoaMelhor = idPessoaMelhor; -- Usuarios e suas respectivas versões de melhores pessoas
