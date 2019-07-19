create database if not exists wsdb;

use wsdb;

create table tb_viagens (
    id int primary key auto_increment,
    pais varchar(150) not null, 
    local varchar(250) not null, 
    imagem text not null, 
    descricao text not null
);