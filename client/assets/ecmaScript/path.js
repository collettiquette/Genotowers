genotower.path = {
    currentPath : null,
        
    translateGrid : function (oldGrid) {
        var x = 0,
            y = 0,
            newGrid = [];

        for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {
            newGrid.push([]);
            
            for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                newGrid[x].push(oldGrid[x][y].impassable);
            }
        }
        return newGrid;
    },
    
    setPath : function () {
        this.currentPath = genotower.aStar(this.translateGrid(genotower.map.tiles), 
                [genotower.config.START_X, genotower.config.START_Y], 
                [genotower.config.END_X, genotower.config.END_Y]);
    },
    
    isValid : function () {
        genotower.path.setPath();
        return !(genotower.path.currentPath.length === 0);
    }

};