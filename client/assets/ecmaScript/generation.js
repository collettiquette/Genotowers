genotower.generation = {

    mutateGenome : function (obstacles) {
        var i = 0,
            max = obstacles.length,
            oldTile = null;

        for (i = 0; i < max; i += 1) {
            oldTile = obstacles[i];

            if (obstacles[i].shouldMutate(genotower.config.MUTATION_RATE)) {
                do {
                    genotower.map.swapTiles(obstacles[i], oldTile);
                    obstacles[i].mutate(genotower.config.MUTATION_DEGREE);
                } while (!genotower.path.isValid())
            }
        }
    },

    verify : function(newX, newY, oldX, oldY) {

        var grid = genotower.path.translateTiles(),
            tempBool = false,
            tempScore = 0;

        tempBool = grid[oldX][oldY];
        grid[oldX][oldY] = grid[newX][newY];
        grid[newX][newY] = tempBool;

        genotower.path.setPath(genotower.path.translateTiles());
        tempScore = this.scoreFitness();
        genotower.path.setPath(grid);
        return this.scoreFitness() >= tempScore;
    },

    scoreFitness : function () {
        return genotower.path.currentPath.length;
    }
};