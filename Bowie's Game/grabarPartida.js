
function Grabar()
{
    var id = id;
    var nombre = "Partida1";
    var estado = "A";
    var fecha_creada = new Date()
    var jugador_nick = document.getElementById("nick");

    // console.log(correo);
    // console.log(nick);

    var xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.onreadystatechange = function()
    {
        console.log(xhr.responseText);
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
    xhr.send(`id=${id}&nombre=${nombre}&estado=${estado}&fecha_creada=${fecha_creada}&jugador_nick=${jugador_nick}`);

    // console.log(xhr.send(`correo=${correo}&nick=${nick}&contrasena=${contrasena}`));

}
