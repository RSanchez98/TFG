<?php
    //var_dump($_POST);
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];
    $c = new mysqli("localhost", "root", "" ,"prueba1");
    if($c == TRUE)
        {
            $sql = "INSERT prueba1 VALUES(null, '$usuario', '$contraseña' )";
            if($c->query($sql) == TRUE)
            {
                echo 'S';
            } 
            else {
                echo 'N';
            }
        }
?> 