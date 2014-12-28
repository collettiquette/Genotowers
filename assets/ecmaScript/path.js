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
    
    setPath : function (grid) {
        this.currentPath = genotower.aStar(grid, [5, 0], [4, 9]);
    }    
};