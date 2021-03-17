var mando = 
{
    objeto: null,
    eventosDisponibles: 'ongamepadconnected' in window, 
    conectado: false,
    iniciar: function()
    {
        if(mando.eventosDisponibles)
        {
            window.addEventListener("gamepadconnected", mando.conectar);
            window.addEventListener("gamepaddisconnected", mando.desconectado)
        }
        else
        {
            mando.actualizar();
        }
    },
    conectar: function(evento)
    {
        mando.objeto = evento.gamepad; //coge el mando conectado y nos devuleve el objeto
        mando.identificar();
    },
    desconectado: function(evento)
    {
        console.log("MANDO DESCONECTADO DEL INDICE %d: %s.", evento.gamepad.index. evento.gamepad.id); 
    },
    actualizar: function(evento)
    {
        if(!mando.eventosDisponibles)
        {
            mandos = null;

            try
            {
                mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []); //callback-> funcion que nos e ejecuta al instante, lo hace cuando termina de ejecutarse el codigo que la contiene || webkit --> motor grafico
                mando.objeto = mandos[0];
                if(!mando.conectado) //si es la primera vez que lo identificamos
                {
                    mando.conectado = true;
                    mando.identificar();
                }
            }
            catch(err)
            {
                console.log(err.message);
            }
        }

        if(!mando.objeto)
        {
            return;
        }

        if(mando.botonPulsado(mando.objeto.buttons[0]))
        {
            console.log("MANDO: A")
        }

    },
    botonPulsado : function(boton)
    {   
        if(typeof(boton) == "object")
        {
            return boton.pressed;
        }
        return boton == 1.0;
    },
    identificar: function(evento)
    {
        console.log("MANDO CONECTADO EN EL INDICE %d: $s. %d botones, %d ejes.", mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
    }
};