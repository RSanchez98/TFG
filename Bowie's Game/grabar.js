
function Grabar()
{
    //jugador--------------------------------------------
    var nick = document.getElementById("nick").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    //jugador--------------------------------------------

    
    //partida--------------------------------------------
    var nombre_partida = document.getElementById("nombre_partida").value;
    var estado = 'A';
    //partida--------------------------------------------
    
    
    //nivel--------------------------------------------
    var puntuacion = 100;
    var mapa = "Ciudad del Arbol Milenario";
    //nivel--------------------------------------------
    
    var otros = "Sesión creada por el jugador desde el juego";

    // console.log(correo);
    // console.log(nick);

    var xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.onreadystatechange = function()
    {
        //console.log(xhr.responseText);

        if(xhr.readyState == 4 && xhr.status == 200)
        {
            if(xhr.responseText == 'N')
            {
                alert('Error en la grabacion');
            }
            else
            {
                alert("Correct");
            }
        }
    }

    xhr.open("POST", "servidor/graba.php", true);
    xhr.responseType = "text";
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    xhr.send(`nick=${nick}&correo=${correo}&contrasena=${contrasena}&nombre_partida=${nombre_partida}&estado=${estado}&otros=${otros}&puntuacion=${puntuacion}&mapa=${mapa}`);

    // console.log(xhr.send(`correo=${correo}&nick=${nick}&contrasena=${contrasena}`));

}
