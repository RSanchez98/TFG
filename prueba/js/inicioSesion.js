var inicioSesion = 
{
    visible: false,
    ultimoRegistro: 0,
    mostrar: function(x, y, registroTemporal) 
    {
        if(inicio_sesion.visible) 
        {
            return;
        }
        if(!inicio_sesion.listoParaCambiar(registroTemporal))
        {
            return;
        }

        x = Math.floor(x);
        y = Math.floor(y);

        let ancho = 600;

        let idMenu= "menu";
        let idUsuario = "usuario";
        let idContraseña = "contraseña";

        document.getElementById(idUsuario).style.backgroundColor = "#3B5C66";
        document.getElementById(idUsuario).style.padding = "0.3em";

        document.getElementById(idContraseña).style.backgroundColor = "#8AC9DD";
        document.getElementById(idContraseña).style.padding = "0.3em";
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

        menu.visible = true;
    },
    ocultar: function(registroTemporal) 
    {
        if(!menu.visible) 
        {
            return;
        }
        if(!menu.listoParaCambiar(registroTemporal))
        {
            return;
        }

        let idMenu= "menu";

        document.getElementById(id).style.display = "none";
        menu.visible = false;
    },
    listoParaCambiar: function(registroTemporal)
    {
        if(registroTemporal - menu.ultimoRegistro < 200)
        {
            return false;
        }
        else
        {
            menu.ultimoRegistro = registroTemporal;
            return true;
        }
    }
};