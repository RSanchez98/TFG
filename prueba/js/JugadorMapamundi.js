function JugadorMapamundi(posicionInicialEnPixeles, estadoJuego) 
{
	this.estadoJuego = estadoJuego;

	this.ancho = 48; //sprites de 16 escalado a 48
	this.alto = 48;

	this.rutaHojaSprites = "img/allFaces.png";

	this.origenXSprite = 0;
	this.origenYSprite = this.alto * this.personaje;

	this.velocidadMovimiento = 2;

	this.velocidadX = 0;
	this.velocidadY = 0;

	this.enMovimiento = false;
	this.framesAnimacion = 0;

	this.subiendo = false;
	this.saltoBloqueado = false;
	this.saltoYInicial = 0;
	this.framesAereosMaximos = 12;
	this.framesAereos = this.framesAereosMaximos;

	this.velocidadTerminal = 10;
	this.velocidadCaida = 0;

	//modo escalera
	

	

	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2); //--> trunca el tamaño de los pixeles apra que no haya 'medios pixeles' porque si no genera una cuadricula blanca para simular esos pixeles
	this.posicionCentrada = new Punto(centroX, centroY); //clase que conteiene una X y una Y, puede colocar algo en una coordenada 2D, y es capaz de compararse con otro punto para ver si están en el mimso punto
	this.rectanguloGeneral = new Rectangulo(centroX, centroY, this.ancho, this.alto);

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
	this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x , 
		this.posicionCentrada.y + posicionInicialEnPixeles.y); 

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
	this.colisionArriba = false;
	this.colisionAbajo = false;
	this.colisionIzquierda = false;
	this.colisionDerecha = false;

	//COMPROBAMOS SI ESTAMOS DENTRO DEL MAPA
	if (!this.limiteArriba.cruza(mapa.limiteMapa)) 
	{
		this.colisionArriba = true;
	}
	if (!this.limiteAbajo.cruza(mapa.limiteMapa)) 
	{
		this.colisionAbajo = true;
	}
	if (!this.limiteIzquierda.cruza(mapa.limiteMapa)) 
	{
		this.colisionIzquierda = true;
	}
	if (!this.limiteDerecha.cruza(mapa.limiteMapa)) 
	{
		this.colisionDerecha = true;
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
			this.colisionArriba = true;
		}
		if(this.limiteAbajo.cruza(traduccionTemporalColision)) 
		{
			this.colisionAbajo = true;
		}
		if(this.limiteIzquierda.cruza(traduccionTemporalColision)) 
		{
			this.colisionIzquierda = true;
		}
		if(this.limiteDerecha.cruza(traduccionTemporalColision)) 
		{
			this.colisionDerecha = true;
		}
	}
}


JugadorMapamundi.prototype.moverEnMapamundi = function()
{
	this.velocidadX = 0;
	this.velocidadY = 0;

	//PERMITIMOS O NO EL MOVIMIENTO	
	if(!this.colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)) 
	{
		this.velocidadY += this.velocidadMovimiento;
	}
	if(!this.colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)) 
	{
		this.velocidadY -= this.velocidadMovimiento;
	}
	if(!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) 
	{
		this.velocidadX += this.velocidadMovimiento;
	}
	if(!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) 
	{
		this.velocidadX -= this.velocidadMovimiento;
	}

	this.posicionEnMapaEnPixeles.x += this.velocidadX;
	this.posicionEnMapaEnPixeles.y += this.velocidadY;
}



JugadorMapamundi.prototype.moverEnNivel = function() 
{
	this.velocidadX = 0;
	this.velocidadY = 0;

	if(this.saltoBloqueado && this.colisionAbajo && !teclado.teclaPulsada(controlesTeclado.saltar)) 
	{
		this.saltoBloqueado = false;
		this.velocidadCaida = 0;
		console.log();
	}

	if(!this.saltoBloqueado && teclado.teclaPulsada(controlesTeclado.saltar)) 
	{
		this.subiendo = true;
		this.saltoBloqueado = true;
	}

	if (!this.colisionArriba && this.subiendo) 
	{
		this.framesAereos--;
		this.velocidadY = 1 * this.velocidadMovimiento + this.framesAereos;

		if(this.framesAereos <= 0) {
			this.subiendo = false;
			this.framesAereos = this.framesAereosMaximos;
		}
	}

	if (!this.colisionAbajo && !this.subiendo) 
	{
		this.velocidadY = Math.round(-this.velocidadCaida);
		console.log(this.velocidadY);
		if(this.velocidadCaida < this.velocidadTerminal) {
			this.velocidadCaida += 0.3;
		}
	}

	if(!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) 
	{
		this.velocidadX = 1 * this.velocidadMovimiento;
	}

	if(!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) 
	{
		this.velocidadX = -1 * this.velocidadMovimiento;
	}

	this.posicionEnMapaEnPixeles.x += this.velocidadX;
	this.posicionEnMapaEnPixeles.y += this.velocidadY;
}

JugadorMapamundi.prototype.dirigir = function()
{
	if(this.estadoJuego == listadoEstados.MAPAMUNDI)
	{
		if(this.velocidadY > 0) //arriba
		{
			this.origenXSprite = this.ancho * 3;
		}
		if(this.velocidadY < 0) //abajo
		{
			this.origenXSprite = this.ancho * 6;
		}
	}
	
	if(this.velocidadX > 0) //derecha
	{
		this.origenXSprite = this.ancho * 9;
	}
	if(this.velocidadX < 0) //izquierda
	{
		this.origenXSprite = this.ancho * 12;
	}
}

JugadorMapamundi.prototype.animar = function()
{
	if(this.velocidadX == 0 && this.velocidadY == 0)
	{
		this.framesAnimacion = 0;
		return;
	}

	if(this.estadoJuego == listadoEstados.NIVEL)
	{
		if(this.saltoBloqueado)
		{
			return;
		}
	}

	this.framesAnimacion++;

	let paso1 = 20;
	let paso2 = 40;
	let origenXSpriteTemporal = this.origenXSprite;

	if(this.framesAnimacion > 0 && this.framesAnimacion < paso1)
	{
		origenXSpriteTemporal += this.ancho;
	}
	if(this.framesAnimacion >= paso1 && this.framesAnimacion < paso2)
	{
		origenXSpriteTemporal += this.ancho * 2;
	}
	if (this.framesAnimacion == paso2)
	{
		this.framesAnimacion = 0;
	}

	document.getElementById("jugador").style.backgroundPosition = "-" + origenXSpriteTemporal + "px -" + this.origenXSprite + "px";
}

JugadorMapamundi.prototype.actualizar = function(registroTemporal, mapa) {
	if(this.estadoJuego == listadoEstados.MAPAMUNDI) {
		this.comprobarColisiones(mapa);
		this.moverEnMapamundi();
		this.dirigir();
		this.animar();
	}

	if(this.estadoJuego == listadoEstados.NIVEL) {
		this.comprobarColisiones(mapa);
		this.moverEnNivel();
		this.dirigir();
		this.animar();
	}
}