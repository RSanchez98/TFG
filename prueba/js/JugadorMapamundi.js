function JugadorMapamundi(posicionInicialEnPixeles) 
{
	this.ancho = 48; //sprites de 16 escalado a 48
	this.alto = 48;

	this.velocidadMovimiento = 2;

	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	this.posicionCentrada = new Punto(centroX, centroY); //clase que conteiene una X y una Y, puede colocar algo en una coordenada 2D, y es capaz de compararse con otro punto para ver si están en el mimso punto

	this.limiteArriba = new Rectangulo(centroX, centroY, this.ancho, 1);
	this.limiteAbajo = new Rectangulo(centroX, centroY + this.alto - 1, this.ancho, 1);
	this.limiteIzquierda = new Rectangulo(centroX, centroY, 1, this.alto);
	this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY, 1, this.alto  );


	posicionInicialEnPixeles.x *=-1 
	posicionInicialEnPixeles.y *=-1

	// this.posicionEnMapaEnPixeles = posicionInicialEnPixeles; --> mapa siempre pegado arriba a la izquierda
	this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x , this.posicionCentrada.y + posicionInicialEnPixeles.y); 

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

JugadorMapamundi.prototype.actualizar = function(registroTemporal, mapa) 
{
	if(teclado.teclaPulsada(controlesTeclado.arriba) && this.limiteArriba.cruza(mapa.limiteMapa)) 
    {
		this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.abajo) && this.limiteAbajo.cruza(mapa.limiteMapa)) 
    {
		this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.izquierda) && this.limiteIzquierda.cruza(mapa.limiteMapa)) 
    {
		this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
	}
	if(teclado.teclaPulsada(controlesTeclado.derecha) && this.limiteDerecha.cruza(mapa.limiteMapa)) 
    {
		this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
	}

	// console.log(this.posicionCentrada.x + ", "+ this.posicionCentrada.y);
}