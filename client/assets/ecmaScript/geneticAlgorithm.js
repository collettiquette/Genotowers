genotower.geneticAlgorithm = {

    evolve : function () {
        var i = 0,
            mutations,
            max,
            bestScore = genotower.path.currentPath.length;

        mutations = genotower.generation.mutateGenome(genotower.towers).concat(genotower.generation.mutateGenome(genotower.walls));
        max = mutations.length;
        console.log(genotower.generation.scoreFitness());

        genotower.path.toggleTorches(false);

        for (i = 0; i < max; i += 1) {
        	genotower.map.swapTiles(mutations[i][0], mutations[i][1]);
        }

        genotower.path.setPath(genotower.path.translateTiles());

        if (bestScore > genotower.generation.scoreFitness()) {

   	        for (i = max - 1; i >= 0; i -= 1) {
            	genotower.map.swapTiles(mutations[i][1], mutations[i][0]);
       	        genotower.path.setPath(genotower.path.translateTiles());
            }
        }

        genotower.path.toggleTorches(true);

        setTimeout(genotower.geneticAlgorithm.evolve, 25);
    }
};
