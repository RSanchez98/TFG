function EstadoMapamundi(idEstado) 
{
	var that = this;
	this.mapaListo = false;
	this.mapa = null;
	this.jugadorMapamundi = null;
	ajax.cargarArchivo("mapas/desierto48.json", function(objetoJSON) 
	{
		that.mapa = new Mapa(objetoJSON);
		that.mapaListo = true;
		that.jugadorMapamundi = new JugadorMapamundi(new Punto(150,250));
		console.log("Mapa cargado por AJAX");
	});
}

EstadoMapamundi.prototype.actualizar = function(registroTemporal) 
{
	if (!this.mapaListo) {
		return;
	}
	this.jugadorMapamundi.actualizar(registroTemporal);
	this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);

	if(this.jugadorMapamundi.limiteArriba.cruza(this.mapa.limiteMapa))
	{
		console.log("está dentro");
	}
	else
	{
		console.log("está fuera");
	}
}

EstadoMapamundi.prototype.dibujar = function() 
{
	if (!this.mapaListo) {
		return;
	}
	this.mapa.dibujar();
}