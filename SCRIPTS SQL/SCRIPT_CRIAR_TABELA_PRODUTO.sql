-- CRIANDO BANCO DE DADOS
CREATE DATABASE PROJETO_MEU_PRODUTO;
USE PROJETO_MEU_PRODUTO;

CREATE TABLE T_PRODUTO(
	cd_produto int auto_increment primary key,
    nm_produto varchar(255) not null,
    ds_produto varchar(255) not null,
    dt_fabricacao date,
    vl_produto double not null
);

INSERT INTO T_PRODUTO(nm_produto, ds_produto, dt_fabricacao, vl_produto) VALUES
("Banana Lima", "Fruta parasitica", '20200927', 5),
("Auto-falante", "Som para carros", '19990101', 300),
("Playstation 5", "Video-game super hyper hypado pelos Gamers", '20201201', 5000);

SELECT
	cd_produto as 'CODIGO', 
	nm_produto as 'NOME DO PRODUTO', 
    ds_produto as 'DESCRIÇÃO DO PRODUTO', 
    dt_fabricacao as 'DATA DE FABRICAÇÃO', 
    vl_produto as 'VALOR DO PRODUTO' 
FROM T_PRODUTO ORDER BY nm_produto ASC;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;