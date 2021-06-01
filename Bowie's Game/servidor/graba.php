<?php   
    $host="localhost";
    $user = "root";
    $pass = "";
    $bd = "rodrigo";



    // var_dump($_POST);
   
    $nick = $_POST['nick'];
    $correo = $_POST['correo'];
    $contrasena = MD5($_POST['contrasena']);

    $nombre_partida = $_POST['nombre_partida'];
    $estado = $_POST['estado'];


  
    $c = new MySQLI($host, $user, $pass ,$bd);
    
    $sql = "INSERT INTO `jugador` (`nick`, `email`, `contrasena`, `admin` ) VALUES ('$nick', '$correo', '$contrasena', 'N')";

    if($c->query($sql) === TRUE)
    {
        $sql = "INSERT INTO `partida` (`id`, `nombre`, `estado`, `fecha_creada`, `jugador_nick` ) VALUES (null, '$nombre_partida', '$estado', NOW(), '$nick')";

        echo $sql;

        if($c->query($sql) === TRUE)
        {
            echo 'S';
        } 
        else {
            echo 'N';
        } 
    }
    
    // var_dump($nick);
    // var_dump($sql);
    // var_dump($c);
?> 