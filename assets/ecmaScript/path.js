genotower.path = {
    
    translateGrid : function (oldGrid) {
        var x = 0,
            y = 0,
            newGrid = [];

        for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {
            newGrid.push([]);
            
            for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                newGrid[x].push(Number(oldGrid[x][y].impassable));
            }
        }
        return newGrid;
    },
    
    checkPath: function () {
        var pathFinder = new EasyStar.js();
    }
};