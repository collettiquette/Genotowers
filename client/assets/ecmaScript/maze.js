genotower.maze = (function () {
    var walls = [],
        towers = [],
        generateGenome = function (obstacle, count) {
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
        },
        mutateGenome = function (obstacles) {
            var i = 0,
                max = obstacles.length,
                oldTile = null,
                mutations = [];

            for (i = 0; i < max; i += 1) {

                if (obstacles[i].shouldMutate(genotower.config.MUTATION_RATE)) {
                    mutations.push(obstacles[i].mutate(
                            genotower.config.MUTATION_DEGREE));
                }
            }

            return mutations;
        };

    return {

        create : function () {

            do {
                genotower.map.initialize();
                walls = generateGenome(genotower.wall, genotower.config.WALL_AMOUNT);
                towers = generateGenome(genotower.tower, genotower.config.TOWER_AMOUNT);
                genotower.path.setPath();
            } while (!genotower.path.isValid())
            genotower.map.draw();
        },

        getMutationInstructions : function () {
            var towerMutations = mutateGenome(towers),
                wallMutations = mutateGenome(walls);

            return wallMutations.concat(towerMutations);
        }
    };
}());

