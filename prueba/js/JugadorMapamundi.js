function JugadorMapamundi(posicionInicialEnPixeles) 
{
	this.ancho = 48; //sprites de 16 escalado a 48
	this.alto = 48;

	this.velocidadMovimiento = 2;

	var centroX = dimensiones.ancho / 2 - this.ancho / 2;
	var centroY = dimensiones.alto / 2 - this.alto / 2;
	this.posicionCentrada = new Punto(centroX, centroY); //clase que conteiene una X y una Y, puede colocar algo en una coordenada 2D, y es capaz de compararse con otro punto para ver si están en el mimso punto

	this.posicionEnMapaEnPixeles = posicionInicialEnPixeles;

	this.aplicarEstilos();
}

JugadorMapamundi.prototype.aplicarEstilos = function() 
{
	var idHTML = "jugador";
	document.getElementById(idHTML).style.backgroundColor = "white";
	document.getElementById(idHTML).style.position = "absolute";
	document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
	document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
	document.getElementById(idHTML).style.width = this.ancho + "px";
	document.getElementById(idHTML).style.height = this.alto + "px";
	document.getElementById(idHTML).style.zIndex = "10"; //ordena en qué posición está cada cosa, con un 10 nos asegurameos que el jugado siempre está en una capa mas alta que las demás (si un juego 2D tiene muchas capas, es indicio de que algo estamos haciendo mal, porque son demasiadas)    
}

JugadorMapamundi.prototype.actualizar = function(registroTemporal) 
{
	if(teclado.teclaPulsada(controlesTeclado.arriba)) 
    {
		this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.abajo)) 
    {
		this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.izquierda)) 
    {
		this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.derecha)) 
    {
		this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
	}
}