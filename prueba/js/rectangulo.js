function Rectangulo(x, y, ancho, alto) 
{
	this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.alto = alto;
}

Rectangulo.prototype.cruza = function(rectangulo) //si dos rectangulos se han cruzado o se han tocado
{
	return (this.x < rectangulo.x + rectangulo.ancho && 
		this.x + this.ancho >rectangulo.x && 
		this.y < rectangulo.y + rectangulo.alto && 
		this.alto + this.y > rectangulo.y) ? true : false; //true : false --> remplaza if else
}