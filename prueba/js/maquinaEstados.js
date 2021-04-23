var maquinaEstados = 
{
    estadoActual: null,
    iniciar: function()
    {

    },
    cambiarEstado: function(nuevoEstado)
    {
        switch(nuevoEstado)
        {
            case listadoEstado.CARGANDO: //estado acutal cargando
            break;
            case listadoEstado.MENU_INICIAL:
                break;
            case listadoEstado.MAPAMUNDI:
                break;
            case listadoEstado.NIVEL:
                break;
        }
    },
    actualizar: function()
    {
        maquinaEstados.estadoActual.actualizar();
    },
    dibujar: function()
    {
        maquinaEstados.estadoActual.dibujar();
    }
}