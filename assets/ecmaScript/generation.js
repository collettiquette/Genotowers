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
        
    scoreFitness : function () {
        return genotower.path.currentPath.length;    
    }
};