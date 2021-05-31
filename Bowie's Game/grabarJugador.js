
function Grabar()
{
    var nick = document.getElementById("nick").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    console.log(correo);
    console.log(nick);

    var xhr = new XMLHttpRequest();
    console.log(xhr)
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
    xhr.send(`nick=${nick}&correo=${correo}&contrasena=${contrasena}`);

    // console.log(xhr.send(`correo=${correo}&nick=${nick}&contrasena=${contrasena}`));

}
