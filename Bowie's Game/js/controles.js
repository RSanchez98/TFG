var controles = 
{
	arriba: false,
	abajo: false,
	izquierda: false,
	derecha: false,
	actualizar: function() 
	{
		if (teclado.teclaPulsada(controlesTeclado.arriba)) 
		{
			controles.arriba = true;
		}
		if (teclado.teclaPulsada(controlesTeclado.abajo)) 
		{
			controles.abajo = true;
		}
		if (teclado.teclaPulsada(controlesTeclado.izquierda)) 
		{
			controles.izquierda = true;
		}
		if (teclado.teclaPulsada(controlesTeclado.derecha)) 
		{
			controles.derecha = true;
		}
	},
	reiniciar: function() 
	{
		controles.arriba = false;
		controles.abajo = false;
		controles.izquierda = false;
		controles.derecha = false;
	}
};


