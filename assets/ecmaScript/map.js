genotower.map = {
    
    tiles : [],
    
    createFloor : function (maxX, maxY) {
        var y = 0,
            x = 0,
            floor = null;
        
        
        for (x = 0; x < maxX; x += 1) {
            this.tiles.push([]);
            for (y = 0; y < maxY; y += 1) {
                floor = Object.create(genotower.floor);
                floor.setPosition(x, y);
                floor.create();
                this.tiles[x].push(floor);
            }
        }
    }
};