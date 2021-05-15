var teclado = 
{
	teclas: new Array(),
	iniciar: function() 
	{
		document.onkeydown = teclado.guardarTecla; //evento que ocurre cuando PULSAMOS una tecla 
		document.onkeyup = teclado.borrarTecla; //evetno que ocurra cuando SOLTAMOS una tecla
	},
	guardarTecla: function(e) 
	{
		if(teclado.teclas.indexOf(e.key) == -1)
		{
			teclado.teclas.push(e.key);
		}
	},
	borrarTecla: function(e)
	{
		var posicion = teclado.teclas.indexOf(e.key);
		if(posicion !== -1)
		{
			teclado.teclas.splice(posicion, 1); //splice --> permite quitar un elemento de una array y reordenarla de tal forma que no se note que ese elemento estaba ahí (quita el índice, no se queda el índice vacío)
		}
	},
	teclaPulsada: function(codigoTecla) 
	{
		return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
	}
};