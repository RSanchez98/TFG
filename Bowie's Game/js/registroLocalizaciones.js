var registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
        let localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Rockport", "niveles/villa48.json", "img/villa48.nivel.png", 0, 630));
        //localizaciones.push(new RegistroLocalizacionEntrada("Salida", "mapa/desierto48.json", "img/mapa48.mapa.png", 0, 100));

        for(var i = 0; i < localizaciones.length; i++) {
            if(nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
};