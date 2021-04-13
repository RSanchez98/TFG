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