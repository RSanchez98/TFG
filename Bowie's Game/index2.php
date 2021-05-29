<!DOCTYPE html>

<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Bowie's Game!</title>
		<meta name="description" content="TFG JUEGO WEB PARA IES Romero Vargas">
		<meta name="author" content="Rodrigo SÃ¡nchez Valle">
		<link rel ="icon" type="image/png" href="img/faces/base1.png"/>
	</head>
	<!-- <div>
		<input type="text" id = "usuario"> <br>
		<input type="text" id = "contrasena"><br>
		<input type="submit" onclick="Grabar()" id="parrafo" value="Submit" style="color: white;">Guardar</input>
	</div> -->
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

			<div id="inventario">
				<div id="cabecera">INVENTARIO</div>
				<div id="contenido">Contenido</div>
			</div>

			<div id ="inicioSesion">
				
				<label for = "usuario" style = "color: white;"> Usuario: </label>
				<input type="text" id="usuario" ><br>

				<label for = "contrasena" style = "color: white;"> contrasena: </label>
				<input type="text" id="contrasena" ><br>
				
				<input onclick="Grabar()" type="submit" value="Submit">
				
			</div>
			

		</div>
		<?php
			include_once 'app/cargadorArchivosJS.inc.php';
		?>
		<script>
			function Grabar()
			{
				var usuario = document.getElementById("usuario").value;
				var contrasena = document.getElementById("contrasena").value;

				var xhr = new XMLHttpRequest();
				xhr.onredystatechange = function()
				{
					console.log(xhr.responseText);
					if(xhr.readyState == 4 && xhr.status == 200)
					{
						if(xhr.responseText == 'N')
						{
							alert('Error en la grabacion');
						}
					}
				}

				xhr.open("GET", "servidor/graba.php", true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
				xhr.send(`usuario=${usuario}&contrasena=${contrasena}`);
			}
		</script>
	</body>
	
</html>