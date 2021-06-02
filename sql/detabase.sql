create database concesionario_exam;
use concesionario_exam;

CREATE TABLE TCMarcas(
id int NOT NULL auto_increment PRIMARY KEY,
Nombre VARCHAR(200) NOT NULL, 
Estado TEXT NOT NULL, 
Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE TCMarcas;
select * from TCMarcas;
