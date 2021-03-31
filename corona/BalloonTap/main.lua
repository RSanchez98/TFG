-----------------------------------------------------------------------------------------
--
-- main.lua
--
-----------------------------------------------------------------------------------------

--BACKGROUND
local background = display.newImageRect("../GettingStarted01-master/background.png", 360, 570)

background.x = display.contentCenterX
background.y = display.contentCenterY

--PLATFORM
local platform = display.newImage("../GettingStarted01-master/platform.png",300,50)
platform.x = display.contentCenterX
platform.y = display.contentHeight-25

--BALLOON
local balloon = display.newImageRect("../GettingStarted01-master/balloon.png",112, 112)
balloon.x = display.contentCenterX
balloon.y = display.contentCenterY
balloon.alpha = 0.8

--PHYSICS
local physics = require("physics");
physics.start();
physics.addBody(platform, "static");
physics.addBody(balloon, "dynamic", {radius=55, bounce=0.3});