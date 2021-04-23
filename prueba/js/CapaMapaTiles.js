function capaMapaTiles(datosCapa, indiceZ, anchoDeLosTiles, paletasSprites)
{
    this.anchoEnTiles = parseInt(datosCapa.width);
    this.altoEnTiles = parseInt(datosCapa.height);
    this.x = parseInt(datosCapa.x)
    this.y = parseInt(datosCapa.y)
    this.z = indiceZ;
    this.tiles = [];
    for(y = 0; y < this.altoEnTiles; y++)
    {
        for (x = 0; x < this.anchoEnTiles; x++)
        {
            var idSpriteAcutalSobreUno = datosCapa.data[x + y * this.anchoEnTiles];
            if(idSpriteAcutalSobreUno == 0)
            {
                this.tiles.push(null);
            }
            else
            {
                var spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteAcutalSobreUno - 1, paletasSprites);

                this.tiles.push(new Tile(x, y, indiceZ, anchoDeLosTiles, altoDeLosTiles, spriteActual));
            }
        }
    }
}

capaMapaTiles.prototype.encontrarSpriteEnPaletaPorId = function(idSpriteSobreZero, paletasSprites)
{
    for(s = 0; s < paletasSprites.length; s++)
    {
        if((idSpriteSobreZero >= paletasSprites[s].primerSpriteSobreUno - 1) && (idSpriteSobreZero < paletasSprites[s].totalSprites + paletasSprites[s].primerSpriteSobreUno + 1))
        {
            return paletasSprites[s].sprites[Math.abs(paletasSprites[s].primerSpriteSobreUno - 1 - idSpriteSobreZero)];
        }
    }
    throw "El ID sobre ZERO "+idSpriteSobreZero+" del sprite no existe en ninguna paleta";
}