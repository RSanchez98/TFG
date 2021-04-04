
local composer = require( "composer" )

local scene = composer.newScene()


local physics = require( "physics" )
physics.start()
physics.setGravity( 0, 0 )

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

local lives = 3
local score = 0
local died = false

local asteroidsTable ={}

local ship
local gameLoopTimer
local livesText
local scoreText

local backGroup
local mainGroup
local uiGroup

local function updateText() --actualizar 
    livesText.text = "Lives: " .. lives
    scoreText.text = "Score: " .. score
end

local function createAsteroid()
    local newAsteroid = display.newImageRect(mainGroup, objectSheet, 1, 102, 85)
    table.insert(asteroidsTable, newAsteroid)
    physics.addBody(newAsteroid,"dynamic",{radius=40, bounce=0.8})
    newAsteroid.myName = "asteroid"

    --generar ubicación ateroides(derecha izquierda arriba)
    local whereFrom = math.random(3)
        if ( whereFrom == 1 ) then
        -- From the left
        newAsteroid.x = -60
        newAsteroid.y = math.random( 500 )
        newAsteroid:setLinearVelocity( math.random( 40,120 ), math.random( 20,60 ) )
    elseif ( whereFrom == 2 ) then
        -- From the top
        newAsteroid.x = math.random( display.contentWidth )
        newAsteroid.y = -60
        newAsteroid:setLinearVelocity( math.random( -40,40 ), math.random( 40,120 ) )
    elseif ( whereFrom == 3 ) then
        -- From the right
        newAsteroid.x = display.contentWidth + 60
        newAsteroid.y = math.random( 500 )
        newAsteroid:setLinearVelocity( math.random( -120,-40 ), math.random( 20,60 ) )
    end
    newAsteroid:applyTorque(math.random(-6,6))
end

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