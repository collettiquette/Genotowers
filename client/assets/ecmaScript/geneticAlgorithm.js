genotower.geneticAlgorithm = {

    evolve : function () {
        var i = 0,
            mutationInstructions,
            max,
            bestScore = genotower.path.getPath().length,
            wallMutationInstructions = genotower.generation.mutateGenome(genotower.walls),
            towerMutationInstructions = genotower.generation.mutateGenome(genotower.towers);

        mutationInstructions = wallMutationInstructions.concat(towerMutationInstructions);
        max = mutationInstructions.length;
        console.log(genotower.generation.scoreFitness());
        genotower.path.toggleWaypoints(false);

        for (i = 0; i < max; i += 1) {
        	genotower.map.swapTiles(mutationInstructions[i].tile1, mutationInstructions[i].tile2);
        }

        genotower.path.setPath(genotower.path.translateTiles());

        if (bestScore > genotower.generation.scoreFitness()) {

   	        for (i = max - 1; i >= 0; i -= 1) {
            	genotower.map.swapTiles(mutationInstructions[i].tile2, mutationInstructions[i].tile1);
       	        genotower.path.setPath(genotower.path.translateTiles());
            }
        }
        genotower.path.toggleWaypoints(true);
        setTimeout(genotower.geneticAlgorithm.evolve, 1);
    }
};
