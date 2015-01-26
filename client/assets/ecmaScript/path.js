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

    toggleWaypoints : function (bool) {
        var i = 0,
            path,
            max;

        this.setPath(genotower.path.translateTiles());
        path = this.currentPath;
        max = path.length;

        for (i = 0; i < max; i += 1) {
            genotower.map.tiles[path[i][0]][path[i][1]].waypointSprite.exists = bool;
        }
    },

    isValid : function () {
        genotower.path.setPath(genotower.path.translateTiles());
        return !(genotower.path.currentPath.length === 0);
    }

};