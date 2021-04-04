-----------------------------------------------------------------------------------------
--
-- main.lua
--
-----------------------------------------------------------------------------------------

local composer = require("composer");

--barra de estado
display.statusBar (display.hiddenStatusBar)

--generador de numeros aleatorios
math.randomseed(os.time());

--ir a la pantalla de menu
composer.gotoScene("menu");