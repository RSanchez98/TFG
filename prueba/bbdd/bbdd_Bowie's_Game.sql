#creamos la base de datos
CREATE DATABASE IF NOT EXISTS base_juego;

#seleccionar la base de datos
USE base_juego;

#crear las tablas sin relacion
CREATE TABLE IF NOT EXISTS Jugador(
	nick VARCHAR(20) NOT NULL, 
	email VARCHAR(50) NOT NULL,
	psswd VARCHAR(50) NOT NULL,
	puntuacion_total SMALLINT NOT NULL, 
	PRIMARY KEY (nick),
    partida_id_partida VARCHAR(20) NOT NULL,
    CONSTRAINT fkjugador_partida FOREIGN KEY (partida_id_partida) REFERENCES partida(id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Partida(
	id VARCHAR(20) NOT NULL, 
	nombre VARCHAR(50) NOT NULL,
	estado ENUM('EN PROGRESO', 'FINALIZADA'),
	fecha_creada DATE NOT NULL, 
    puntuacion_partidoa SMALLINT NOT NULL,
	PRIMARY KEY (id)
)ENGINE=INNODB;