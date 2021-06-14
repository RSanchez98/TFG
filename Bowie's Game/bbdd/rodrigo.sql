-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2021 a las 13:43:19
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rodrigo`
--
CREATE DATABASE IF NOT EXISTS `rodrigo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `rodrigo`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `melocargotodo` ()  begin
truncate partida;
truncate sesion;
truncate nivel;
truncate sesion_has_nivel;
truncate jugador;
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `nick` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `admin` enum('S','N') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`nick`, `email`, `contrasena`, `admin`) VALUES
('asdf', 'f', 'eff7d5dba32b4da32d9a67a519434d3f', 'N'),
('cv', 'b', '92eb5ffee6ae2fec3ad71c777531578f', 'N'),
('f', 'f', '8fa14cdd754f91cc6554c9e71929cce7', 'N');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `id` int(11) NOT NULL,
  `puntuacion` int(11) NOT NULL,
  `mapa` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel`
--

INSERT INTO `nivel` (`id`, `puntuacion`, `mapa`) VALUES
(1, 100, 'Ciudad del Arbol Milenario'),
(2, 100, 'Ciudad del Arbol Milenario'),
(3, 100, 'Ciudad del Arbol Milenario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` enum('A','F') NOT NULL,
  `fecha_creada` date DEFAULT NULL,
  `jugador_nick` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`id`, `nombre`, `estado`, `fecha_creada`, `jugador_nick`) VALUES
(1, 'asdf', 'A', '2021-06-14', 'asdf'),
(2, 'dffd', 'A', '2021-06-14', 'f'),
(3, 'fdsf', 'A', '2021-06-14', 'cv');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `partida_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `fecha_hora_inicio` datetime NOT NULL,
  `fecha_hora_fin` datetime DEFAULT NULL,
  `otros` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion_has_nivel`
--

CREATE TABLE `sesion_has_nivel` (
  `sesion_id` int(11) NOT NULL,
  `nivel_id` int(11) NOT NULL,
  `fecha_superacion_nivel` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`nick`);

--
-- Indices de la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_partida_jugador_idx` (`jugador_nick`);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sesion_partida1_idx` (`partida_id`);

--
-- Indices de la tabla `sesion_has_nivel`
--
ALTER TABLE `sesion_has_nivel`
  ADD PRIMARY KEY (`sesion_id`,`nivel_id`),
  ADD KEY `fk_sesion_has_nivel_nivel1_idx` (`nivel_id`),
  ADD KEY `fk_sesion_has_nivel_sesion1_idx` (`sesion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `fk_partida_jugador` FOREIGN KEY (`jugador_nick`) REFERENCES `jugador` (`nick`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD CONSTRAINT `fk_sesion_partida1` FOREIGN KEY (`partida_id`) REFERENCES `partida` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sesion_has_nivel`
--
ALTER TABLE `sesion_has_nivel`
  ADD CONSTRAINT `fk_sesion_has_nivel_nivel1` FOREIGN KEY (`nivel_id`) REFERENCES `nivel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sesion_has_nivel_sesion1` FOREIGN KEY (`sesion_id`) REFERENCES `sesion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
