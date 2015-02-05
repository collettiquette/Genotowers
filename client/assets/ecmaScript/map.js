genotower.map = (function () {
    tiles = [];

    return {

        iterateOverCoordinates : function (outerCallback, innerCallback) {
            var x = 0,
                y = 0;

            for (x = 0; x < genotower.config.MAP_WIDTH; x += 1) {

                if (outerCallback) {
                    outerCallback(x, y);
                }

                for (y = 0; y < genotower.config.MAP_HEIGHT; y += 1) {
                    innerCallback(x, y);
                }
            }
        },

        initialize : function () {
            tiles = [];
            this.iterateOverCoordinates(function () {
                    tiles.push([]);
                },
                function (x, y) {
                    var floor = Object.create(genotower.floor);
                    floor.setPosition(x, y);
                });
        },

        swapTiles : function (oldTile, newTile) {
            var x = newTile.x,
                y = newTile.y;

            newTile.setPosition(oldTile.x, oldTile.y);
            oldTile.setPosition(x, y);
            newTile.syncSpritePosition();
            oldTile.syncSpritePosition();
        },

        draw : function () {
            var innerFunction = function (x, y) {
                genotower.map.getTile(x, y).create();
            };

            genotower.map.iterateOverCoordinates(false, innerFunction);
        },

        getRandomPosition : function () {

            return { 
                x : (Math.floor(Math.random() * genotower.config.MAP_WIDTH)), 
                y : (Math.floor(Math.random() * genotower.config.MAP_HEIGHT))
            };
        },

        checkBounds : function (x, y) {

            return ((x < genotower.config.MAP_WIDTH) && (x >= 0) &&
                    (y < genotower.config.MAP_HEIGHT) && (y >= 0) &&
                    this.checkStart(x, y));
        },

        checkStart : function (x, y) {

            return (x !== genotower.config.START_X || y !==
                    genotower.config.START_Y);
        },

        setTile : function (x, y, tile) {
            tiles[x][y] = tile;
        },

        getTile : function (x, y) {
            return tiles[x][y];
        }
    };
}());
