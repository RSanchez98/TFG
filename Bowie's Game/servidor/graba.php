<?php   
    $host="localhost";
    $user = "root";
    $pass = "";
    $bd = "rodrigo";



    var_dump($_POST);
   
    $nick = $_POST['nick'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $estado = $_POST['estado'];
    $fecha_creada = $_POST['fecha_creada'];
    $jugador_nick = $_POST['nick']


  
    $c = new MySQLI($host, $user, $pass ,$bd);
    
    $sql = "INSERT INTO `jugador` (`nick`, `email`, `contrasena`, `admin` ) VALUES ('$nick', '$correo', '$contrasena', 'N')";
    $sql = "INSERT INTO `partida` (`id`, `nombre`, `estado`, `fecha_creada`, `jugador_nick` ) VALUES ('$id', '$nombre', 'A', '$fecha_creada', '$jugador_nick')";
    if($c->query($sql) === TRUE)
    {
        echo 'S';
    } 
    else {
        echo 'N';
    } 
    
    var_dump($nick);
    var_dump($sql);
    var_dump($c);
?> 