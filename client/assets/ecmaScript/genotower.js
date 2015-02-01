var genotower = {

    walls : [],
    towers : [],

    randomSign : function (i){
        return Math.random() < 0.5 ? -1 * i : i;
    },

    placeObstacle : function (obstacle, count) {
        var i = 0,
            randomPosition = null,
            obstacleList = [];

        for (i = 0; i < count; i += 1) {
            currentObstacle = Object.create(obstacle);
            randomPosition = genotower.map.getRandomPosition();

            while (genotower.map.getTile(randomPosition.x, randomPosition.y).impassable || (randomPosition.x === genotower.config.START_X && randomPosition.y === genotower.config.START_Y)) {
                randomPosition = genotower.map.getRandomPosition();
            }

            genotower.map.setTile(randomPosition.x, randomPosition.y, currentObstacle);
            currentObstacle.setPosition(randomPosition.x, randomPosition.y);
            obstacleList.push(currentObstacle);
        }

        return obstacleList;
    },

    generateGenotype : function (wallCount, towerCount) {

        do {
            genotower.map.initialize();
            this.walls = this.placeObstacle(genotower.wall, wallCount);
            this.towers = this.placeObstacle(genotower.tower, towerCount);
            genotower.path.setPath(genotower.path.translateTiles());
        } while (!genotower.path.isValid())
    }
};

// Defines Object.create if it doesn't exist.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}