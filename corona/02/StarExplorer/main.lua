-----------------------------------------------------------------------------------------
--
-- main.lua
--
-----------------------------------------------------------------------------------------

--FÍSICAS Y GRAVEDAD
local physics = require("physics")
physics.start()
physics.setGravity(0,0)

--SEMILLA ALEATORIA
math.randomseed(os.time())

--CONFIGURACIÓN DE IMAGENES
local sheetOptions =
{
    frames =
    {
        { -- asteroide 1
            x = 0,
            y = 0,
            width = 102,
            height = 85
        },
        { -- asteroide 2
            x = 0,
            y = 85,
            width = 90,
            height = 86
        },
        { -- asteroide 3
            x = 0,
            y = 168,
            width = 100,
            height = 97
        },
        { -- nave
            x = 0,
            y = 265,
            width = 98,
            height = 79
        },
        { -- laser
            x = 98,
            y = 265,
            width = 14,
            height = 40
        },
    },
}
local objectSheet = graphics.newImageSheet("../GettingStarted02-master/gameObjects.png", sheetOptions)


--INICIALIZAR VARIABLES
local lives = 3
local score = 0
local died = false

local asteroidTable ={}

local ship
local gameLoopTimer
local livesText
local scoreText

--GRUPOS DE VISUALIZACIÓN   
local backGroup = display.newGroup()   --imagen de fondo
local mainGroup = display.newGroup()   --nave, asteroides y laser
local uiGroup = display.newGroup()     --UI (puntiación)

--CARGAR EL FONDO
local background = display.newImageRect(backGroup, "../GettingStarted02-master/background.png", 800, 1400)
background.x = display.contentCenterX
background.y = display.contentCenterY

ship = display.newImageRect( mainGroup, objectSheet, 4, 98, 79 )
ship.x = display.contentCenterX
ship.y = display.contentHeight - 100
physics.addBody( ship, { radius=30, isSensor=true } )
ship.myName = "ship"

--VIDA Y PUNTUACIÓN
livesText = display.newText(uiGroup, "Lives: " .. lives, 200, 80, native.systemFont, 36);
scoreText = display.newText(uiGroup, "Score: " .. score, 550, 80, native.systemFont, 36);
local function updateText() --actualizar 
      livesText.text = "Lives: " .. lives
      scoreText.text = "Score: " .. score
end