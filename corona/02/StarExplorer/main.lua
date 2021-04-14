-----------------------------------------------------------------------------------------
--
-- main.lua
--
-----------------------------------------------------------------------------------------

local composer = require("composer");

--barra de estado
display.setStatusBar (display.hiddenStatusBar)

--generador de numeros aleatorios
math.randomseed(os.time());

--reserva un canal para musica de fondo, y no puede reproducir ningun otro tipo de sondido 
audio.reserveChannels( 1 );
--volumen de la canción
audio.setVolume( 0.25, { channel=1 });

--ir a la pantalla de menu
composer.gotoScene("menu");