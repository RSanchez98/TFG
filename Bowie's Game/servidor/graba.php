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

    //$fecha_hora_inicio = "SELECT fecha_creada FROM partida";
    
    
    
    
    $c = new MySQLI($host, $user, $pass ,$bd);
    
    
    $sql = "INSERT INTO jugador (nick, email, contrasena, admin ) VALUES ('$nick', '$correo', '$contrasena', 'N')";
    
    

    if($c->query($sql))
    {
    
        $sql = "INSERT INTO partida (id, nombre, estado, fecha_creada, jugador_nick ) VALUES (null, '$nombre_partida', '$estado', NOW(), '$nick')";
        
        // $sql = "SELECT id FROM partida";
        // $id_partida = $c->query($sql);
        // $c->query($id_partida);
        // var_dump($sql);
        // echo json_encode($id_partida->fetch_all(MYSQLI_ASSOC));

        
        if($c->query($sql))
        {
            $sql = "INSERT INTO nivel (id, puntuacion, mapa) VALUES (null, $puntuacion, '$mapa')"; 
                
                if($c->query($sql))
                {
                    $sql = " SELECT p.id FROM partida p JOIN jugador j ON p.jugador_nick = j.nick WHERE j.nick = '$nick' ";
                    $result = $c->query($sql); 
                    $id_partida = intval($result->fetch_assoc()['id']);

                    $sql = "INSERT INTO sesion VALUES ($id_partida, null, NOW(), NOW(), '$otros')";
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
?> 