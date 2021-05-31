<?php   
    $host="localhost";
    $user = "root";
    $pass = "";
    $bd = "rodrigo";



    var_dump($_POST);
   
    $nick = $_POST['nick'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];


  
    $c = new MySQLI($host, $user, $pass ,$bd);
    
    $sql = "INSERT INTO `jugador` (`nick`, `email`, `contrasena`, `admin` ) VALUES ('$nick', '$correo', '$contrasena', 'N')";
    $sql = "INSERT INTO `partida` (`nick`, `email`, `contrasena`, `admin` ) VALUES ('$nick', '$correo', '$contrasena', 'N')";
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