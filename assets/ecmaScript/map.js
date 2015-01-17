genotower.map = {
    
    tiles : [],
    
    initialize : function () {
        var y = 0,
            x = 0,
            w = 0,
            t = 0,
            floor = null;
        
        this.tiles = [];
        
        for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {
            this.tiles.push([]);
            
            for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                floor = Object.create(genotower.floor);
                floor.setPosition(x, y);
                this.tiles[x].push(floor);
            }
        }
    },
    
    draw : function () {

        for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {

            for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                this.tiles[x][y].create();
            }
        }
    },
    
    getRandomPosition : function () {
         return [(Math.floor(Math.random() * 
                genotower.config.MAP_WIDTH)), (Math.floor(Math.random() * 
                genotower.config.MAP_HEIGHT))];
    }
};