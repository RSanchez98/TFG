<?php
    var_dump($_POST);
    $nick = $_POST['nick'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

  
    $c = new mysqli("localhost", "root", "" ,"rodrigo");
    if($c == TRUE)
    {
        $sql = "INSERT jugador VALUES(null, '$nick', '$correo', MD5('$contrasena'), 'N' )"; //CODIFICAR CONTRASEÑA
        if($c->query($sql) == TRUE)
        {
            echo 'S';
        } 
        else {
            echo 'N';
        }

        // $sql = "INSERT partida VALUES(null,'Ciudad del Arbol Milenario', 'A', '$fecha_hoy','$usuario')";
        // if($c->query($sql) == TRUE)
        // {
        //     echo 'S';
        // } 
        // else {
        //     echo 'N';
        // }
    }
?> 