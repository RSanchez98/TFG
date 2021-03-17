//DOM == DOCUMENT OBJECT MODEL
//Cunando se cargue el documento, ejecucta "function"
document.addEventListener('DOMContentLoaded', function()
{
   inicio.iniciarJuego();
}, false);


var inicio =
{
    iniciarJuego: function()
    {
        console.log("JUEGO INICIADO");
        ajax.cargarArchivo("mapas/desierto.json")
        teclado.iniciar();
        dimensiones.iniciar();
        mando.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();
    },
    recargarTiles: function()  // borrar el contenido del div juego y llenarlo de rectangulos
    {
        document.getElementById("juego").innerHTML = "";
        for(var y = 0; y < dimensiones.obtenerTilesVerticales(); y++)
        {
            for(var x = 0; x < dimensiones.obtenerTilesTotales(); x++)
            {
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, 
                    dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }
    }
};