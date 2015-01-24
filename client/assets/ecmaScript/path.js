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

    translateTiles : function() {
        return this.translateGrid(genotower.map.tiles);
    },

    setPath : function (grid) {
        this.currentPath = genotower.aStar(grid,
                [genotower.config.START_X, genotower.config.START_Y],
                [genotower.config.END_X, genotower.config.END_Y]);
    },

    toggleTorches : function (on) {
        var path = genotower.path.currentPath;
        for (i=0; i<path.length; i+=1) {
            genotower.map.tiles[path[i][0]][path[i][1]].torchSprite.exists = on;
        }
    },

    isValid : function () {
        genotower.path.setPath(genotower.path.translateTiles());
        return !(genotower.path.currentPath.length === 0);
    }

};