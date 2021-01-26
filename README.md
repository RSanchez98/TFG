# Pre Proyecto 2ºDAW
# Bowie's Game!
## Rodrigo Sánchez Valle

***IDEA PRINCIPAL***
Quiero desarrollar un juego para navegador. Podrá ser jugado en cualquiera 
de ellos (Chrome, Firefox, Safari, Opera, Edge…) y también en cualquier sistema 
operativo que pueda soportar dichos navegadores. Las mecánicas del juego serán:
1. **Plataformas.** El juego será un scroll lateral con plataformas. Se moverá de izquierda a derecha 
y tendrá la opción de saltar. Cada plataforma dendrá su hit-box, dependiendo de su tamaño y forma.
2. **Items.** A medida que se avanza en el mapa, aparecerán elementos que podremos recoger, y según 
su aspecto nos proporcionarán:
	-Puntos que se irán sumando.
	-Reducción de vida.
	-Regeneración de vida.
3. **NPC.** Nos encontraremos con Personajes No Jugador con una pequeña inteligencia artificial. Habrá, 
en principio, dos tipos de NPC:
	-Pasivos. Estos estarán estáticos en un punto del mapa, para poder pasar hay que usar la acción 
	“ladrar” para ahuyentarlos y poder continuar
	-Agresivos. Estarán moviéndose por una zona del mapa. Si entramos dentro de su campo de visión nos 
	atacarán y perderemos vida. Para evitar eso simplemente hay que pasar sin ser detectado, ya sea pasando 
	por sitos por encima o debajo de su ubicación, o avanzando sigilosamente tras elementos del mapa donde 
	nos podremos esconder.
4. **Mecánicas.** Algo básico en cualquier juego, moverse de izquierda a derecha, y la capacidad de poder saltar. 
A demás, tendremos dos movimientos más, el ladrido, para ahuyentar a los enemigos, y andar despacio, para no ser detectado.

***HERRAMIENTAS PARA EL DESARROLLO***
Para desarrollar el juego, en principio usaré:
	-HTML.
	-CSS.
	-JavaScript será la tecnología que moverá el juego.
	-PHP para el servidor local con XAMPP, para guardar las partidas o servir los recursos para el juego.
	-MySQL / MariaDB. Para tener un guardado online, para que pueda acceder a su partida guardad entrando en su cuenta. Así 
	también se podrán añadir novedades como mas niveles, objetos o personajes desde servidor solo actualizando la BBDD, y el 
	usuario no tendrá que descargar ni actualizar nada.
	-Tiled, para el escenario y los sprites.
	
Si todo sale según lo previsto, también desarrollaré un multijugador online con Node.js.
