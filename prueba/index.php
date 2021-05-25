<!doctype html>

<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Bowie's Game!</title>
		<meta name="description" conent="TFG JUEGO WEB PARA IES Romero Vargas">
		<meta name="author" conent="Rodrigo Sánchez Valle">
		<link rel ="icon" type="image/png" href="img/faces/base1.png"/>
	</head>
	<!-- <div>
		<input type="text" id = "usuario"> <br>
		<input type="text" id = "contraseña"><br>
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
			<form action="servidor/graba.php" method="post" >
				<p style="color:white;">Nombre de usuario: <input type="text" name="usuario"  placeholder="Usuario para acceder"></p>

				<p style="color:white;">Contraseña: <input type="password" name="contraseña" placeholder="Elije una contraseña fuerte"></p>

				<p><input type="submit" value="Enviar datos"></p>
			</form>
			</div>
			

		</div>
		<?php
			include_once 'app/cargadorArchivosJS.inc.php';
		?>
		<script>
			function Grabar()
			{
				var usuario = document.getElementById("usuario").innerHTML;
				var contraseña = document.getElementById("contraseña").innerHTML;

				var xhr = XMLHttpRequest();
				xhr.onredystatechange = function()
				{
					if(xhr.readyState == 4 && xhr.status == 200)
					{
						if(xhr.responseText == 'N')
						{
							alert('Error en la grabacion');
						}
					}
				}

				xhr.open("POST", "servidor/graba.php", true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
				xhr.send('usuario=${usuario}&contraseña=${contraseña}');
			}
		</script>
	</body>
	
</html>