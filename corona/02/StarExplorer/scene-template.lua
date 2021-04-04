
local composer = require( "composer" )

local scene = composer.newScene()

local function gotoGame()
	composer.gotoScene("game");
end

local function gotoHighScores()
	composer.gotoScene("highscores");
end

--create()
function scene:create(event)
	local sceneGroup = self.view

	physics.pause(); --pausar el motor de física

	backGroup = display.newGroup();
	sceneGroup:insert(backGroup)

	mainGroup = display.newGroup();
	sceneGroup:insert(mainGroup)

	uiGroup = display.newGroup();
	uiGroup.insert(uiGroup)

	--cargando el bakcground
	local bakcground = display.newImageRect(backGroup,"./GettingStarted02-master/background.png",800,1400);
	background.x = display.contentCenterX
	background.y = display.contentCenterY

	-- nave
	ship = display.newImageRect( mainGroup, objectSheet, 4, 98, 79 )
    ship.x = display.contentCenterX
    ship.y = display.contentHeight - 100
    physics.addBody( ship, { radius=30, isSensor=true } )
    ship.myName = "ship"
 
    -- vidas y puntuacion
    livesText = display.newText( uiGroup, "Lives: " .. lives, 200, 80, native.systemFont, 36 )
    scoreText = display.newText( uiGroup, "Score: " .. score, 400, 80, native.systemFont, 36 )

	ship:addEventListener("tap", fireLaser)
	ship:addEventListener("tap", dragShip)
end