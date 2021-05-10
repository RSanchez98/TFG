var inventario = 
{
    visible: false,
    ultimoRegistro: 0,
    mostrar: function(x, y, registroTemporal) 
    {
        if(inventario.visible) 
        {
            return;
        }
        if(!inventario.listoParaCambiar(registroTemporal))
        {
            return;
        }

        x = Math.floor(x);
        y = Math.floor(y);

        let ancho = 300;

        let id = "inventario";
        let idCabecera = "cabecera";
        let idContenido = "contenido";

        document.getElementById(idCabecera).style.backgroundColor = "#3B5C66";
        document.getElementById(idCabecera).style.padding = "0.3em";

        document.getElementById(idContenido).style.backgroundColor = "#8AC9DD";
        document.getElementById(idContenido).style.padding = "0.3em";
        document.getElementById(id).style.border = "3px solid black";


        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.position = "absolute";
        document.getElementById(id).style.transform = 'translate3d('+ x + 'px, ' + y + 'px, 0' + ')';
        document.getElementById(id).style.width = ancho + "px";
        document.getElementById(id).style.zIndex = "11";
        document.getElementById(id).style.backgroundColor = "#3B5C66";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.border = "3px solid black";
        document.getElementById(id).style.padding = "0.5em";
        document.getElementById(id).style.textAlign = "center";
        document.getElementById(id).style.fontFamily = "sans-serif, Helvetica";

        inventario.visible = true;
    },
    ocultar: function(registroTemporal) 
    {
        if(!inventario.visible) 
        {
            return;
        }
        if(!inventario.listoParaCambiar(registroTemporal))
        {
            return;
        }

        let id = "inventario";

        document.getElementById(id).style.display = "none";
        inventario.visible = false;
    },
    listoParaCambiar: function(registroTemporal)
    {
        if(registroTemporal - inventario.ultimoRegistro < 200)
        {
            return false;
        }
        else
        {
            inventario.ultimoRegistro = registroTemporal;
            return true;
        }
    }
};