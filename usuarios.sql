-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2023 a las 17:49:18
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `departamento_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`, `departamento_id`) VALUES
(1, 'Medellín', 1),
(2, 'Sabaneta', 1),
(3, 'Bogotá', 2),
(4, 'Zipaquirá', 2),
(5, 'Cali', 3),
(6, 'Tuluá', 3),
(7, 'El Ángel', 4),
(8, 'Tulcán', 4),
(9, 'Milagro', 5),
(10, 'Guayaquil', 5),
(11, 'Cayambe', 6),
(12, 'Quito', 6),
(13, 'Archorage', 7),
(14, 'North Pole', 7),
(15, 'Miami', 8),
(16, 'Orlando', 8),
(17, 'Manhattan', 9),
(18, 'Brooklyn', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`, `pais_id`) VALUES
(1, 'Antioquia', 1),
(2, 'Cundinamarca', 1),
(3, 'Valle del Cauca', 1),
(4, 'Carchi', 2),
(5, 'Guayas', 2),
(6, 'Pichincha', 2),
(7, 'Alaska', 3),
(8, 'Florida', 3),
(9, 'New York', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `identificacion`
--

CREATE TABLE `identificacion` (
  `id` int(11) NOT NULL,
  `tipo_identificacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `identificacion`
--

INSERT INTO `identificacion` (`id`, `tipo_identificacion`) VALUES
(1, 'Tarjeta Identidad'),
(2, 'Cédula Ciudadania'),
(3, 'Cédula Extranjera'),
(4, 'Pasaporte');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `marca` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `marca`) VALUES
(1, 'Americanino'),
(2, 'American Eagle'),
(3, 'Chevignon'),
(4, 'Esprit'),
(5, 'G-Star Raw'),
(6, 'Naf Naf'),
(7, 'Rifle'),
(8, 'Todo Al 50%');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre`) VALUES
(1, 'Colombia'),
(2, 'Ecuador'),
(3, 'Estados Unidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `tipo_identificacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `apellido`, `ciudad`, `departamento`, `direccion`, `fecha_nacimiento`, `identificacion`, `marca`, `nombre`, `pais`, `tipo_identificacion`) VALUES
(1, NULL, 'Medellin', 'Antioquia', 'las palmas', '18/01/2022', NULL, NULL, NULL, 'Colombia', 'Cedula Ciudadania'),
(2, 'Galvis Galvis', 'Medellin', 'Antioquia', 'las palmas', '18/01/2022', '1039463599', 'American Eagle', 'Didier Alexander', 'Colombia', 'Cedula Ciudadania'),
(3, 'Galvis Lopez', 'Tuluá', 'Valle del Cauca', 'cr40-39d26', '2015-06-11', '71597396', 'G-Star Raw', 'Baltazar', 'Colombia', NULL),
(4, 'Aristizabal Florez', 'Tulcán', 'Carchi', 'cr40-39d26', '2003-02-02', '1000872745', 'Naf Naf', 'Maria Alejandra', 'Ecuador', 'Cédula Ciudadania'),
(5, 'Gonsalez Galvis', 'Medellín', 'Antioquia', 'cr40-39d26', '2015-06-26', '986541235', 'Americanino', 'Matias', 'Colombia', 'Tarjeta Identidad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4a087507o9j9ksh1tuw7ed4up` (`departamento_id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpmxt507p1yp3ldiweejl35iiy` (`pais_id`);

--
-- Indices de la tabla `identificacion`
--
ALTER TABLE `identificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `identificacion`
--
ALTER TABLE `identificacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `FK4a087507o9j9ksh1tuw7ed4up` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`);

--
-- Filtros para la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD CONSTRAINT `FKpmxt507p1yp3ldiweejl35iiy` FOREIGN KEY (`pais_id`) REFERENCES `paises` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
