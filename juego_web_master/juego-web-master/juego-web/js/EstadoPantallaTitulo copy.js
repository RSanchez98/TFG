function EstadoPantallaMuerte() {
    this.rutaImagenMuerte = "img/muerte.png";
    this.idHTML = "pantalla-muerte";
    this.anchoImagen = "500";
    this.altoImagen = "300";

    this.movimientoY = 0;

    this.framesAnimacion = 0;

    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.width = this.anchoImagen + "px";
    document.getElementById(this.idHTML).style.height = this.altoImagen + "px";
    document.getElementById(this.idHTML).style.background = "url('" + this.rutaImagenMuerte + "')";
    document.getElementById(this.idHTML).style.backgroundClip = "border-box";
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2) + 'px, 0';

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";

    audio.reproducir(audio.pista1);

    document.getElementsByTagName("body")[0].onclick = function() {
        document.getElementById("pantalla-muerte").style.display = "none";

        document.getElementsByTagName("body")[0].onclick = "";

        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    }
}

EstadoPantallaMuerte.prototype.actualizar = function(registroTemporal) {
    if(this.framesAnimacion < 30) {
        this.movimientoY++;
    }
    if(this.framesAnimacion >= 30 && this.framesAnimacion < 90) {
        this.movimientoY--;
    }
    if(this.framesAnimacion >= 90 && this.framesAnimacion < 120) {
        this.movimientoY++;
    }

    this.framesAnimacion++;

    if(this.framesAnimacion >=120) {
        this.framesAnimacion = 0;
        this.movimientoY = 0;
    }
}

EstadoPantallaMuerte.prototype.dibujar = function() {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY) + 'px, 0)';
}