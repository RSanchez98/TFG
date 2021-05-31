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

				<label id="nick" for="nick" >Usuario: </label>
				<input type="text" id="nick"  size="35">
				<br>
				<label id = "correo" for="correo" >Correo: </label>
				<input type="text" id="correo"  size="35">
				<br>
				<label id="contrasena" for="contrasena" >Contraseña: </label>
				<input type="password" id="contrasena" size="35">
				<br>
				<input onclick="Grabar()" type="submit" value="Enviar">
				
			</div>
			

		</div>
		<?php
			include_once 'app/cargadorArchivosJS.inc.php';
		?>
		<script>
			function Grabar()
			{
                
				var nick = document.getElementById("nick").value;
				var correo = document.getElementById("correo").value;
				var contrasena = document.getElementById("contrasena").value;


				var xhr = new XMLHttpRequest();
                console.log(xhr);
				xhr.onredystatechange = function()
				{
					console.log(xhr.responseText);
					if(xhr.readyState == 4 && xhr.status == 200)
					{
						if(xhr.responseText == 'N')
						{
							alert('Error en la grabacion');
						}
						else
						{
							alert("Correct");
						}
					}
				}

				xhr.open("POST", "servidor/graba.php", true);
				xhr.responseType = "text";
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
				xhr.send(`correo=${correo}&nick=${nick}&contrasena=${contrasena}`);
				console.log(xhr.send);
			}
		</script>
	</body>
	
</html>