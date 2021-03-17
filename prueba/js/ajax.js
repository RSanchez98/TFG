var ajax = 
{
    cargarArchivo: function(ruta)
    {
        var peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function()
        {
            /*
            ESTADO DE LA PETICION
            0 o UNSET - no iniciada
            1 o OPENED - conectado al servidor
            2 o HEADERS_RECIVED - peticion recibida
            3 o LOADING - procesando petición
            4 o DONE - petición finalizada, respuesta preparada
            */
            if(peticion.readyState == XMLHttpRequest.DONE)
            {
                if(peticion.status == 200) //codigo que significa que todo ha ido bien
                {   
                    console.log(JSON.parse(peticion.responseText)); //la respuesta la convertimos a json
                }
                else if(peticion.status == 400)
                {
                    console.log("error")
                }
                else
                {
                    console.log("restulado inesperado")
                }
            }
        };
        peticion.open("GET", ruta, true);
        peticion.send();
    }   
}