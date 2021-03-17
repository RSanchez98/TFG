var dimensiones = 
{
    ancho: window.innerWidth, //propiedad ancho interno
    alto: window.innerHeight, //propiedad ancho interno
    ladoTiles: 100, //cuadrados que fomran el mapa en juegos 2D
    escala: 1,

    iniciar: function()
    {
        window.addEventListener("resize", function(evento) 
        {
            dimensiones.ancho = window.innerWidth;
            dimensiones.alto = window.innerHeight;
            console.log("Ancho: " + dimensiones.ancho + "| Alto: " + dimensiones.alto);
            inicio.recargarTiles();
        });
    },
    obtenerTilesHorizontales: function() //para saber cuantos Tiles caben de izq a der
    {
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala; //para escalarlo
        return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal); //para saber cuantos rectangulos caben hacia esa direccion 
    },
    obtenerTilesVerticales: function() //para saber cuantos Tiles caben de izq a der
    {
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala; //para escalarlo
        return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal); //para saber cuantos rectangulos caben 

    },
    obtenerTilesTotales: function()
    {
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
    }
};