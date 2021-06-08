var registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
        let localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Ciudad del Arbol Milenario", "niveles/villa49.json", "img/villa49.nivel.png", 50, 1500)); 
        localizaciones.push(new RegistroLocalizacionEntrada("Pedrusco de la Rascacion", "niveles/villa48.json", "img/villa48.nivel.png", 200, 630));
        localizaciones.push(new RegistroLocalizacionEntrada("La Camita Azul", "niveles/nivelGrande.json", "img/nivelGrande.nivel.png", 50, 400));

        for(var i = 0; i < localizaciones.length; i++) {
            if(nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
};