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
livesText = display.newText(uiGroup, "Lives: " .. lives, 200, 80, native.systemFont, 36)
scoreText = display.newText(uiGroup, "Score: " .. score, 550, 80, native.systemFont, 36)
local function updateText() --actualizar 
    livesText.text = "Lives: " .. lives
    scoreText.text = "Score: " .. score
end

--CREAR ASTEROIDES
local function createAsteroid()
    local newAsteroid = display.newImageRect(mainGroup, objectSheet, 1, 102, 85)
    table.insert(asteroidTable, newAsteroid)
    physics.addBody(newAsteroid,"dynamic",{radius=40, bounce=0.8})
    newAsteroid.myName = "asteroid"

    --generar ubicación ateroides(derecha izquierda arriba)
    local whereFrom = math.random(3)
        if (whereFrom == 1)  then
            --izquierda
            newAsteroid.x = -60
            newAsteroid.y = math.random(500)
            newAsteroid:setLinearVelocity(math.random(4,120), math.random(20,60))

        elseif(whereFrom == 2) then
            --arriba
            newAsteroid.x = math.random(display.contentWidth)
            newAsteroid.y = -60
            newAsteroid.setLinearVelocity(math.random(-40, 40), math.random(40,120))

        elseif(whereFrom == 3) then
            --derecha
            newAsteroid.x = display.contentWidth +60
            newAsteroid.y = math.random(500)
            newAsteroid:setLinearVelocity( math.random( -120,-40 ), math.random( 20,60 ) )
    end
    newAsteroid:applyTorque(math.random(-6,6))
end

--DISPARAR LASER
local function fireLaser()
 
    local newLaser = display.newImageRect( mainGroup, objectSheet, 5, 14, 40 )
    physics.addBody( newLaser, "dynamic", { isSensor=true } )
    newLaser.isBullet = true
    newLaser.myName = "laser"

    newLaser.x = ship.x
    newLaser.y = ship.y

    newLaser:toBack()

    transition.to( newLaser, { y=-40, time=500, 
        onComplete = function() display.remove( newLaser ) end
    } )

end
ship:addEventListener( "tap", fireLaser )

--MOVIMIENTO DE LA NAVE
local function dragShip(event)
    local ship = event.target
    local phase = event.phase

    if("began" == phase) then 
        display.currentStage:setFocus(ship) --toque de la nave

        ship.touchOffsetX = event.x - ship.x --almacenar la posición
        ship.touchOffsetY = event.y - ship.y


        elseif("moved" == phase) then
            ship.x = event.x - ship.touchOffsetX --mover la nave a la nueva posición
            ship.y = event.y - ship.touchOffsetY

        elseif("ended" == phase or "cancelled" == phase) then
            display.currentStage:setFocus(nil)
        
    end

    return true -- Prevents touch propagation to underlying objects

end
ship:addEventListener("touch", dragShip)