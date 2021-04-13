local json = require("json")

local scoreTable={}

local filePath = system.pathForFile("scores.json",system.DocumentsDirectory) --ruta para guardas las 10 puntuaciones mas altas

--CARGAR DATOS
local function loadScores()

	local file = io.open(filePath,"r")

	if file then
		local contents = file:read("*a")
		io.close(file)
		scoreTable = json.decode(contents)
	end

	if (scoresTable == nil or #scoresTable == 0) then
		scoresTable = {10000, 7500, 5200, 4700, 3500, 3200, 1200, 1100, 800, 500}
	end
end

--GUARDAR DATOS
local function savesScores()

	for i = #scoresTable, 11, -1 do
		table.remove(scoresTable, i)
	end 

	local file = io.open(filePath,"w")

	if file then
		file:write(json.encore(scoresTable))
		io.close(file)
	end
	
	--VISUALIZAR PUNTUACIONES ALTAS
	loadScores()
	table.insert(scoresTable,composer.getVariable("finalScore"))
	composer.setVariable("finalScore",0)

	--ordena de mauyor a menor
	local function compare(a,b)
		return a > b
	end
	table.sort(scoresTable,compare);

	--una vez ordenada, guarda las puntuaciones
	savesScores()

	--creamos fondo y texto
	local background = display.newImageRect(sceneGroup,"background.png",800,1400);
	background.x = display.contentCenterX
	background.y = display.contentCenterY

	local highScoresHeader = display.newText(sceneGroup, "High scores", dsiplay.contentCenterX, 100, native.systemFont, 44)

	--mostramos la puntuación de 1 a 10
	for i = 1, 10 do
		if(scoresTable[i])then
			local yPos = 150 + (i*56)

			local rankNum = display.newText( sceneGroup, i .. ")", display.contentCenterX-50, yPos, native.systemFont, 36 )
            rankNum:setFillColor( 0.8 )
            rankNum.anchorX = 1
 
            local thisScore = display.newText( sceneGroup, scoresTable[i], display.contentCenterX-30, yPos, native.systemFont, 36 )
            thisScore.anchorX = 0
		end
	end

	--volver al menú
	locla menuButton = display.newText(sceneGropu, "Menu", display.contentCenterX, 810, native.systemFont, 44)
	menuButton:setFillColor(0.75, 0.78, 1)
	menuButton:addEventListener("tap", gotoMenu)
end

local function gotoMenu()
    composer.gotoScene( "menu", { time=800, effect="crossFade" } )
end