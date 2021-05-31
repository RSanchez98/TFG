<!DOCTYPE html>

<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Bowie's Game!</title>
		<meta name="description" content="TFG JUEGO WEB PARA IES Romero Vargas">
		<meta name="author" content="Rodrigo Sánchez Valle">
		<link rel ="icon" type="image/png" href="img/faces/base1.png"/>
	</head>
	
	<body>
	
		<div id="juego">	
			<div id="pantalla-titulo">
			</div>	

			<div id="mapa">
			</div>		

			<div id="jugador">
			</div>

			<div id="colisiones">
			</div>

			<div id="localizaciones">
			</div>

			<div id="popup">
			</div>

			<div id ="inicioSesion" style = "padding-left: 800px; padding-top: 400px;">
				<h3 style="text-align: center; margin: 0px;">Iniciar Sesión</h3>

				<label  >Usuario: </label> 
				<br>
				<input type="text" id="nick"  size="35">
				<br>

				<label  >Correo: </label> 
				<br>
				<input type="text" id="correo"  size="35">
				<br>

				<label >Contraseña: </label> 
				<br>
				<input type="password" id="contrasena" size="35">
				<br>

				<button onclick="Grabar()" type="button" value="Enviar">Enviar</button>
				
			</div>
			

		</div>
		<?php
			include_once 'app/cargadorArchivosJS.inc.php';
		?>
		<script src ="grabarJugador.js"></script>
	</body>
	
</html>