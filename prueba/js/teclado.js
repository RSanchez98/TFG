var teclado = 
{
    teclas: new Array(),
    iniciar: function()
    {
        document.onkeydown = teclado.guardarTecla;
    },
    guardarTecla: function(evento)
    {
        teclado.teclas.push(evento.key);
        console.log(evento.key);
    },
    teclaPulsada: function(codigoTecla)
    {
        return(teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
    },
    reiniciar: function()
    {
        teclado.teclas = new Array();
    }
};