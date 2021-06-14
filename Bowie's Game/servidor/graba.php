<?php   
    $host="localhost";
    $user = "root";
    $pass = "";
    $bd = "rodrigo";

   
    $nick = $_POST['nick'];
    $correo = $_POST['correo'];
    $contrasena = MD5($_POST['contrasena']);

    $nombre_partida = $_POST['nombre_partida'];
    $estado = $_POST['estado'];

    $puntuacion = intval($_POST['puntuacion']);
    $mapa = $_POST['mapa'];

    $otros = $_POST['otros'];    
    
    
    $c = new MySQLI($host, $user, $pass ,$bd);
    
    $sql = "INSERT INTO jugador (nick, email, contrasena, admin ) VALUES ('$nick', '$correo', '$contrasena', 'N')";
    
    if($c->query($sql))
    {    
        $sql = "INSERT INTO partida (id, nombre, estado, fecha_creada, jugador_nick ) VALUES (null, '$nombre_partida', '$estado', NOW(), '$nick')";
          
        if($c->query($sql))
        {
            $insertPartida = $c->insert_id;

            $sql = "INSERT INTO nivel (id, puntuacion, mapa) VALUES (null, $puntuacion, '$mapa')"; 
                
            if($c->query($sql))
            {
                $insertNivel = $c->insert_id;
               
                $sql = "INSERT INTO sesion VALUES ($insertPartida, null, NOW(), NOW(), '$otros')";
                
                if($c -> query($sql))
                {
                    $insertSesion = $c->insert_id;

                    $sql = "INSERT INTO sesion_has_nivel VALUES ($insertSesion, $insertNivel, NOW())";

                    if($c->query($sql))
                    {
                        echo 'S';
                    } 
                    else 
                    {
                        echo 'N';
                    }
                }
            }
            
        }

    }
?> 