var maquinaEstados = 
{
	estadoActual: null,
	iniciar: function() 
	{
		maquinaEstados.cambiarEstado(listadoEstados.PANTALLA_TITULO);
	},
	cambiarEstado: function(nuevoEstado, objetoEntradaLocalizacion) 
	{
		switch(nuevoEstado) 
		{
			case listadoEstados.CARGANDO:
				break;
			case listadoEstados.MENU_INICIAL:
				break;
			case listadoEstados.MAPAMUNDI:
				maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI, "mapas/desierto48.json", 200, 300);
				break;
			case listadoEstados.NIVEL:
				maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.NIVEL, objetoEntradaLocalizacion.rutaMapa,
					objetoEntradaLocalizacion.coordenadaXInicial, objetoEntradaLocalizacion.coordenadaYInicial);
					console.log("Nivel");
				break;
			case listadoEstados.PANTALLA_TITULO:
				console.log("iniciando pantalla");
				maquinaEstados.estadoActual = new EstadoPantallaTitulo();
				break;
		}
	},
	actualizar: function(registroTemporal) 
	{
		maquinaEstados.estadoActual.actualizar(registroTemporal);
	},
	dibujar: function() 
	{
		maquinaEstados.estadoActual.dibujar();
	}
} 