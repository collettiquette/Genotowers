genotower.map = {
    
    tiles : [],
    
    createFloor : function () {
        var y = 0,
            x = 0,
            w = 0,
            t = 0,
            floor = null;
        
        for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {
            this.tiles.push([]);
            
            for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                floor = Object.create(genotower.floor);
                floor.setPosition(x, y);
                floor.create();
                this.tiles[x].push(floor);
            }
        }
    }
};