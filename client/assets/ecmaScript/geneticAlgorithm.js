genotower.geneticAlgorithm = {

    evolve : function () {
        var i = 0,
            max,
            bestScore = genotower.generation.scoreFitness(),
            mutationInstructions = genotower.maze.getMutationInstructions();

        max = mutationInstructions.length;
        console.log(genotower.generation.scoreFitness());
        genotower.path.toggleWaypoints(false);

        for (i = 0; i < max; i += 1) {
        	genotower.map.swapTiles(mutationInstructions[i].tile1,
                    mutationInstructions[i].tile2);
        }

        genotower.path.setPath();

        if (bestScore > genotower.generation.scoreFitness()) {

   	        for (i = max - 1; i >= 0; i -= 1) {
            	genotower.map.swapTiles(mutationInstructions[i].tile2,
                        mutationInstructions[i].tile1);
       	        genotower.path.setPath();
            }
        }
        genotower.path.toggleWaypoints(true);

        genotower.config.MONSTER_COUNT === 0 ? 
                setTimeout(genotower.geneticAlgorithm.evolve, 1) :
                genotower.hoarde.charge();
    }
};

