function Rectangulo(x, y, ancho, alto) 
{
	this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.alto = alto;
	this.idHTML = "colision x" + x + "y" + y;
	this.html = '<div id="' + this.idHTML + '"></div>';
}

Rectangulo.prototype.cruza = function(rectangulo) //si dos rectangulos se han cruzado o se han tocado
{
	return (this.x < rectangulo.x + rectangulo.ancho && 
		this.x + this.ancho >rectangulo.x && 
		this.y < rectangulo.y + rectangulo.alto && 
		this.alto + this.y > rectangulo.y) ? true : false; //true : false --> remplaza if else
}

Rectangulo.prototype.aplicarEstiloTemporal = function() 
{
	if (!document.getElementById(this.idHTML)) 
	{
		throw("El ID " + this.idHTML + " no existe en la hoja");
	}

	var color ="#ff0000";
	document.getElementById(this.idHTML).style.backgroundColor = color;

	document.getElementById(this.idHTML).style.position = "absolute";
	document.getElementById(this.idHTML).style.left = this.x + "px";
	document.getElementById(this.idHTML).style.top = this.y + "px";
	document.getElementById(this.idHTML).style.width = this.ancho + "px";
	document.getElementById(this.idHTML).style.height = this.alto + "px";
	document.getElementById(this.idHTML).style.zIndex = "5";
} 

Rectangulo.prototype.mover = function(x, y)
{
	document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
}