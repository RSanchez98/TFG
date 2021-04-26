//DOM == DOCUMENT OBJECT MODEL
//Cunando se cargue el documento, ejecucta "function"


var inicio =
{
    iniciadores: //array de funciones en el orden en el que queremos que se ejecute
    [
        maquinaEstados.iniciar(),
		teclado.iniciar(),
		mando.iniciar(),
		buclePrincipal.iterar()
    ],
    iniciarJuego: function()
    {
        inicio.encadenarInicios(inicio.iniciadores.shift()); //shift devuelve el primer elemento y luego lo borra del array
    },
    encadenarInicios: function(iniciador) 
    {
		if(iniciador) 
        {
			iniciador(() => inicio.encadenarInicios(iniciadores.shift()));
		}
	}
};

document.addEventListener('DOMContentLoaded', function() 
{
	inicio.iniciarJuego();
}, false);
