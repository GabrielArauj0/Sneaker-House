create database sneakerhouse;
use sneakerhouse;
create table usuario (
	cpf int not null,
	nome varchar(100),
	celular varchar(15),
	endereco varchar(100),
	email varchar(100),
	primary key(cpf)
);
create table tenis (
	id int not null auto_increment,
    nome varchar(100),
    descricao text,
    preco_unitario float,
    unidade varchar(10),
    tamanho varchar(2),
    primary key(id)
    );
create table compra (
	id int not null auto_increment,
    quantidade int,
    id_tenis int not null,
    entrega int not null,
    cpf_usuario int not null,
    primary key(id),
    foreign key (id_tenis) references tenis(id),
    foreign key (cpf_usuario) references usuario(cpf)
    );