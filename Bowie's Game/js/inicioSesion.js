var inicioSesion = 
{
    visible: false,
    ultimoRegistro: 0,
    mostrar: function(x, y, registroTemporal) 
    {
        if(inicioSesion.visible) 
        {
            return;
        }
        if(!inicioSesion.listoParaCambiar(registroTemporal))
        {
            return;
        }

        x = Math.floor(x);
        y = Math.floor(y);

        let ancho = 300;

        let id = "inicioSesion";
        let idUsuario = "usuario";
        let idCorreo = "correo";
        let idConstrasena = "contrasena";
        let idInput = "input";

        // document.getElementById(idUsuario).style.backgroundColor = "#8AC9DD";
        // document.getElementById(idUsuario).style.padding = "0.3em";

        // document.getElementById(idCorreo).style.backgroundColor = "#8AC9DD";
        // document.getElementById(idCorreo).style.padding = "0.3em";
        
        // document.getElementById(idConstrasena).style.backgroundColor = "#8AC9DD";
        // document.getElementById(idConstrasena).style.padding = "0.3em";

        
        document.getElementById(id).style.border = "3px solid black";

        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.lineHeight = "30px";
        document.getElementById(id).style.position = "absolute;";
        document.getElementById(id).style.transform = 'translate3d('+ x + 'px, ' + y + 'px, 0' + ')';
        document.getElementById(id).style.width = ancho + "px";
        document.getElementById(id).style.zIndex = "11";
        document.getElementById(id).style.backgroundColor = "#3B5C66";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.border = "3px solid black";
        document.getElementById(id).style.padding = "0.5em";
        // document.getElementById(id).style.textAlign = "center";
        document.getElementById(id).style.fontFamily = "sans-serif, Helvetica";

        inicioSesion.visible = true;
    },
    ocultar: function(registroTemporal) 
    {
        if(!inicioSesion.visible) 
        {
            return;
        }
        if(!inicioSesion.listoParaCambiar(registroTemporal))
        {
            return;
        }

        let id = "inicioSesion";

        document.getElementById(id).style.display = "none";
        inicioSesion.visible = false;
    },
    listoParaCambiar: function(registroTemporal)
    {
        if(registroTemporal - inicioSesion.ultimoRegistro < 200)
        {
            return false;
        }
        else
        {
            inicioSesion.ultimoRegistro = registroTemporal;
            return true;
        }
    }
};