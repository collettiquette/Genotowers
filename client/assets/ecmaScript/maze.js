genotower.maze = (function () {
    var walls = [],
        towers = [],
        cachedMutations = [],
        generateGenome = function (obstacle, count) {
            var i = 0,
                randomPosition,
                currentObstacle,
                obstacles = [];

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
                obstacles.push(currentObstacle);
            }

            return obstacles;
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
            genotower.path.toggleWaypoints(true);
        },

        mutate : function () {
            var mutations = mutateGenome(walls).concat(mutateGenome(towers)),
                i = 0,
                max = mutations.length;

            genotower.path.toggleWaypoints(false);

            for (i = 0; i < max; i += 1) {
                genotower.map.swapTiles(mutations[i].tile1, 
                        mutations[i].tile2);
            }

            genotower.path.setPath();
            genotower.path.toggleWaypoints(true);
            cachedMutations = mutations;

            if (!genotower.path.isValid()) {
                genotower.maze.discardLastMutation();
                genotower.maze.mutate();
            }
        },

        discardLastMutation : function () {
            var i;

            genotower.path.toggleWaypoints(false);

   	    for (i = cachedMutations.length - 1; i >= 0; i -= 1) {
                genotower.map.swapTiles(cachedMutations[i].tile2,
                        cachedMutations[i].tile1);
            }
            genotower.path.setPath();
            genotower.path.toggleWaypoints(true);
            cachedMutations = [];
        }
    };
}());

