genotower.maze = (function () {
    var walls = [],
        towers = [],
        placeObstacle = function (obstacle, count) {
            var i = 0,
                randomPosition,
                currentObstacle,
                obstacleList = [];

            for (i = 0; i < count; i += 1) {
                currentObstacle = Object.create(obstacle);
                randomPosition = genotower.map.getRandomPosition();

                while (genotower.map.getTile(randomPosition.x,
                        randomPosition.y).impassable || (randomPosition.x ===
                        genotower.config.START_X && randomPosition.y ===
                        genotower.config.START_Y)) {
                    randomPosition = genotower.map.getRandomPosition();
                }

                genotower.map.setTile(randomPosition.x, randomPosition.y,
                        currentObstacle);
                currentObstacle.setPosition(randomPosition.x, randomPosition.y);
                obstacleList.push(currentObstacle);
            }

            return obstacleList;
        };

    return {

        create : function () {

            do {
                genotower.map.initialize();
                walls = placeObstacle(genotower.wall, genotower.config.WALL_AMOUNT);
                towers = placeObstacle(genotower.tower, genotower.config.TOWER_AMOUNT);
                genotower.path.setPath();
            } while (!genotower.path.isValid())
            genotower.map.draw();
        },

        getMutationInstructions : function () {
            var towerMutations = genotower.generation.mutateGenome(towers),
                wallMutations = genotower.generation.mutateGenome(walls);
            
            return wallMutations.concat(towerMutations);
        }
    };
}());

