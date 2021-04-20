//CLASE INSTANCIABLE, POR ESO ESTÁ LA PRIMERA LETRA EN MAYUS
// x, y --> posicion
// ancho, alto --> tamaño 
function Rectangulo(x, y, ancho, alto)
{
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    // this.id = x + "r" + y; //EJ--> x = 1,11 y =11,1 | id=1r11, id=11r1
    // this.insertarDOM();
}

// Rectangulo.prototype.insertarDOM = function()
// {
//     var div = '<div id="' + this.id + '"></div>'; //ejemplo --> <div id="r0102"></div>
// 	var html = document.getElementById("juego").innerHTML; //obtine el contenido que haya dentro del div id=juego y lo vuelca en la variable html
// 	var color = '#' + Math.floor(Math.random() * 16777215).toString(16); //para obtener un numero en hexadecimal que siempre esté en el rango de los colores de CSS
// 	document.getElementById("juego").innerHTML = html + div;
// 	document.getElementById(this.id).style.position = "absolute";
// 	document.getElementById(this.id).style.left = this.x + "px";
// 	document.getElementById(this.id).style.top = this.y + "px";
// 	document.getElementById(this.id).style.width = this.ancho + "px";
// 	document.getElementById(this.id).style.height = this.alto + "px";
// 	document.getElementById(this.id).style.backgroundColor = color;
// }