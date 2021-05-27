var registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
        let localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Ciudad del Arbol Milenario", "niveles/villa48.json", "img/villa48.nivel.png", 0, 630)); 
    
        localizaciones.push(new RegistroLocalizacionEntrada("Pedrusco de la Rascacion", "niveles/villa50.json", "img/villa50.nivel.png", 0, 0));

        for(var i = 0; i < localizaciones.length; i++) {
            if(nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
};