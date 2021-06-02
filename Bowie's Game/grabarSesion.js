function Sesion()
{
    var otros = "Sesión creada por el jugador desde el juego";

    var xhr = new XMLHttpRequest();
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
    xhr.send(`otros=${otros}`);

}
