genotower.path = (function () {
    var currentPath = null,
        getPath = function () {

            return currentPath;
        },
        translateTiles = function () {
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
        };

    return {

        setPath : function () {
            var i = 0,
                max,
                tempX,
                tempY;

            currentPath = genotower.aStar(translateTiles(),
                    [genotower.config.START_X, genotower.config.START_Y],
                    [genotower.config.END_X, genotower.config.END_Y]);
            max = currentPath.length;

            for (i = 0; i < max; i +=1) {
                tempX = currentPath[i][0];
                tempY = currentPath[i][1];
                currentPath[i] = {
                    x : tempX,
                    y : tempY
                };
            }
        },

        getLength : function () {
            return getPath().length;
        },

        getSquare : function (positionOnPath) {
            return getPath()[positionOnPath];
        },

        toggleWaypoints : function (bool) {
            var i = 0,
                path,
                max;

            this.setPath(translateTiles());
            path = getPath();
            max = this.getLength();

            for (i = 0; i < max; i += 1) {
                genotower.map.getTile(path[i].x, path[i].y).waypointSprite.exists = bool;
            }
        },

        isValid () {
            genotower.path.setPath(translateTiles());

            return !(this.getLength() === 0);
        }
    };
}());

