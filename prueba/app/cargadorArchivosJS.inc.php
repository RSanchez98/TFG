<?php
    $fecha = new DateTime();

    $fuentesJavascript = array
    (
        "js/Rectangulo.js", 
        "js/Punto.js",
        "js/Sprite.js",
        "js/Tile.js",
        "js/ajax.js", 
        "js/teclado.js", 
        "js/mando.js", 
        "js/buclePrincipal.js", 
        "js/dimensiones.js", 
        "js/inicio.js"
    );
    foreach($fuentesJavascript as $fuente)
    {
        echo '<script src=" '.$fuente.'?'.$fecha -> getTimestamp().' "></script>';
    }
?>