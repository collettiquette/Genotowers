genotower.path = {
    currentPath : null,

    translateTiles : function () {
        var x = 0,
            y = 0,
            grid = [];

        genotower.map.iterateOverCoordinates(function () {
                grid.push([]);
            },
            function (x, y) {
                grid[x].push(genotower.map.getTile(x, y).impassable);
            });

        return grid;
    },

    setPath : function (grid) {
        var i = 0,
            max,
            tempX,
            tempY;

        this.currentPath = genotower.aStar(grid,
                [genotower.config.START_X, genotower.config.START_Y],
                [genotower.config.END_X, genotower.config.END_Y]);
        max = this.currentPath.length;

        for (i = 0; i < max; i +=1) {
            tempX = this.currentPath[i][0];
            tempY = this.currentPath[i][1];
            this.currentPath[i] = {
                x : tempX,
                y : tempY
            };
        }
    },

    getPath : function () {
        return this.currentPath;
    },

    toggleWaypoints : function (bool) {
        var i = 0,
            path,
            max;

        this.setPath(this.translateTiles());
        path = this.currentPath;
        max = path.length;

        for (i = 0; i < max; i += 1) {
            genotower.map.getTile(path[i].x, path[i].y).waypointSprite.exists = bool;
        }
    },

    isValid : function () {
        genotower.path.setPath(genotower.path.translateTiles());

        return !(genotower.path.currentPath.length === 0);
    }

};
