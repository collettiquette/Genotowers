genotower.map = {
    
    tiles : [],
    
    generateFloor : function (maxX, maxY) {
        for (i = 0; i < maxX; i += 1) {
            genotower.map.tiles.push([]);
            for (j = 0; j < maxY; j += 1) {
                genotower.map.tiles[i].push(Object.create())
            }
        }
    }
};