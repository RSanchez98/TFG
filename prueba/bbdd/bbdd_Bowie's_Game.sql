#creamos la base de datos
CREATE DATABASE IF NOT EXISTS base_juego;

#seleccionar la base de datos
USE base_juego;

#crear las tablas sin relacion PREGUNTAR POR LOS CALCULADOS
CREATE TABLE IF NOT EXISTS Jugador(
	nick VARCHAR(20) NOT NULL, 
	email VARCHAR(50) NOT NULL,
	psswd VARCHAR(50) NOT NULL,
	puntuacion_total SMALLINT NOT NULL, 
	PRIMARY KEY (nick),
    partida_id_partida VARCHAR(5) NOT NULL,
    CONSTRAINT fkjugador_partida FOREIGN KEY (partida_id_partida) REFERENCES partida(id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Partida(
	id VARCHAR(5) NOT NULL, 
	nombre VARCHAR(50) NOT NULL,
	estado ENUM('EN PROGRESO', 'FINALIZADA'),
	fecha_creada DATE NOT NULL, 
    puntuacion_partidoa SMALLINT NOT NULL,
	PRIMARY KEY (id),
    sesion_id_sesion varchar(5) not null,
    CONSTRAINT fkpartida_sesion  FOREIGN KEY (sesion_id_sesion) REFERENCES sesion(id)
)ENGINE=INNODB;


CREATE TABLE IF NOT EXISTS Nivel(
	id INT NOT NULL,
	puntuacion INT NOT NULL,
	mapa VARCHAR(20),
	PRIMARY KEY (id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Sesion_Nivel(
	id_sesion_sesiones INT NOT NULL,
    id_nivel_niveles INT NOT NULL,
    PRIMARY KEY(id_sesion_sesiones, id_nivel_niveles),
    CONSTRAINT fksesion_nivel FOREIGN KEY (id_sesion_sesiones) REFERENCES Sesion(id),
	CONSTRAINT fknivel_sesion FOREIGN KEY (id_nivel_niveles) REFERENCES Nivel(id)
)ENGINE=INNODB;