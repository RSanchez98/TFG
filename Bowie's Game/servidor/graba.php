<?php
    $usuario = $_POST['usuario'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $c = new mysqli("localhost", "root", "" ,"rodrigo");
    if($c == TRUE)
        {
            $sql = "INSERT jugador VALUES(null, '$usuario', '$correo', MD5('$contrasena'), 'N' )"; //CODIFICAR CONTRASEÑA
            if($c->query($sql) == TRUE)
            {
                echo 'S';
            } 
            else {
                echo 'N';
            }
        }
?> 