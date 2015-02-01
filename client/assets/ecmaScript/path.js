genotower.path = {
    currentPath : null,

    translateGrid : function (oldGrid) {
        var x = 0,
            y = 0,
            newGrid = [],
            outerFunction = function (x, y) {
                newGrid.push([]);
            },
            innerFunction = function (x, y) {
                newGrid[x].push(oldGrid[x][y].impassable);
            };

        genotower.map.iterateOverCoordinates(outerFunction, innerFunction);
        return newGrid;
    },

    translateTiles : function () {
        var x = 0,
            y = 0,
            grid = [],
            outerFunction = function (x, y) {
                grid.push([]);
            },
            innerFunction = function (x, y) {
                grid[x].push(genotower.map.getTile(x, y));
            };

        genotower.map.iterateOverCoordinates(outerFunction, innerFunction);
        return this.translateGrid(grid);
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

        this.setPath(this.translateTiles());
        path = this.currentPath;
        max = path.length;

        for (i = 0; i < max; i += 1) {
            genotower.map.getTile(path[i][0], path[i][1]).waypointSprite.exists = bool;
        }
    },

    isValid : function () {
        genotower.path.setPath(genotower.path.translateTiles());
        return !(genotower.path.currentPath.length === 0);
    }

};