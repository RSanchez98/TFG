function JugadorMapamundi(posicionInicialEnPixeles) 
{
	this.ancho = 48; //sprites de 16 escalado a 48
	this.alto = 48;

	this.rutaHojaSprites = "img/face.png";
	this.personaje = 5; //elegir personaje

	this.origenXSprite = 0;
	this.origenYSprite = this.alto * this.personaje;

	this.velocidadMovimiento = 2;

	this.velocidadX = 0;
	this.velocidadY = 0;

	this.enMovimiento = false;
	this.framesAnimacion = 0;

	
	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	this.posicionCentrada = new Punto(centroX, centroY); //clase que conteiene una X y una Y, puede colocar algo en una coordenada 2D, y es capaz de compararse con otro punto para ver si están en el mimso punto
	this.posicionGeneral = new Rectangulo(centroX, centroY, this.ancho, this.alto);

	this.limiteArriba = new Rectangulo(centroX + this.ancho / 3, centroY, this.ancho / 3, 1);
	this.limiteAbajo = new Rectangulo(centroX + this.ancho / 3, centroY + this.alto - 1, this.ancho / 3, 1);
	this.limiteIzquierda = new Rectangulo(centroX, centroY + this.alto / 3, 1, this.alto / 3);
	this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY + this.alto / 3, 1, this.alto / 3 );

	this.colisionArriba = false;
	this.colisionAbajo = false;
	this.colisionIzquierda = false;
	this.colisionDerecha = false;
	

	posicionInicialEnPixeles.x *=-1 
	posicionInicialEnPixeles.y *=-1

	// this.posicionEnMapaEnPixeles = posicionInicialEnPixeles; --> mapa siempre pegado arriba a la izquierda
	this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x , this.posicionCentrada.y + posicionInicialEnPixeles.y); 

	this.aplicarEstilos();
}

JugadorMapamundi.prototype.aplicarEstilos = function() 
{
	var idHTML = "jugador";
	//document.getElementById(idHTML).style.backgroundColor = "white";
	document.getElementById(idHTML).style.position = "absolute";
	document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
	document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
	document.getElementById(idHTML).style.width = this.ancho + "px";
	document.getElementById(idHTML).style.height = this.alto + "px";
	document.getElementById(idHTML).style.zIndex = "10"; //ordena en qué posición está cada cosa, con un 10 nos asegurameos que el jugado siempre está en una capa mas alta que las demás (si un juego 2D tiene muchas capas, es indicio de que algo estamos haciendo mal, porque son demasiadas)    
	document.getElementById(idHTML).style.background = "url('"+ this.rutaHojaSprites +"')";     
	document.getElementById(idHTML).style.backgroundPosition = "-"+this.origenXSprite + "px -"+ this.origenYSprite + "px";     
	document.getElementById(idHTML).style.backgroundClip = "border-box";     
	document.getElementById(idHTML).style.outline = "1px solid transparent";     


}

JugadorMapamundi.prototype.comprobarColisiones = function(mapa)
{
	var colisionArriba = false;
	var colisionAbajo = false;
	var colisionIzquierda = false;
	var colisionDerecha = false;

	//COMPROBAMOS SI ESTAMOS DENTRO DEL MAPA
	if (!this.limiteArriba.cruza(mapa.limiteMapa)) 
	{
		colisionArriba = true;
	}
	if (!this.limiteAbajo.cruza(mapa.limiteMapa)) 
	{
		colisionAbajo = true;
	}
	if (!this.limiteIzquierda.cruza(mapa.limiteMapa)) 
	{
		colisionIzquierda = true;
	}
	if (!this.limiteDerecha.cruza(mapa.limiteMapa)) 
	{
		colisionDerecha = true;
	}

	//COMPROBAMOS QUE NO HAY RECTANGULOS EN MEDIO
	for (var i = 0; i < mapa.rectangulosColisiones.length; i++) 
	{
		
		var traduccionTemporalColision = new Rectangulo(
			mapa.rectangulosColisiones[i].x + mapa.posicion.x,
			mapa.rectangulosColisiones[i].y + mapa.posicion.y,
			mapa.rectangulosColisiones[i].ancho,
			mapa.rectangulosColisiones[i].alto
		);
		
		if(this.limiteArriba.cruza(traduccionTemporalColision)) 
		{
			colisionArriba = true;
		}
		if(this.limiteAbajo.cruza(traduccionTemporalColision)) 
		{
			colisionAbajo = true;
		}
		if(this.limiteIzquierda.cruza(traduccionTemporalColision)) 
		{
			colisionIzquierda = true;
		}
		if(this.limiteDerecha.cruza(traduccionTemporalColision)) 
		{
			colisionDerecha = true;
		}
	}

	//PERMITIMOS O NO EL MOVIMIENTO	
	if(!colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)) 
	{
		this.posicionEnMapaEnPixeles.y += this.velocidadMovimiento;
	}
	if(!colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)) 
	{
		this.posicionEnMapaEnPixeles.y -= this.velocidadMovimiento;
	}
	if(!colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) 
	{
		this.posicionEnMapaEnPixeles.x += this.velocidadMovimiento;
	}
	if(!colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) 
	{
		this.posicionEnMapaEnPixeles.x -= this.velocidadMovimiento;
	}

}

JugadorMapamundi.prototype.actualizar = function(registroTemporal, mapa) 
{
	this.comprobarColisiones(mapa);
}