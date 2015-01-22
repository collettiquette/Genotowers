genotower.geneticAlgorithm = {

    evolve : function () {

        genotower.generation.mutateGenome(genotower.towers);
        genotower.generation.mutateGenome(genotower.walls);
        genotower.map.draw();
        genotower.path.placePath();
        console.log(genotower.generation.scoreFitness());
        setTimeout(genotower.geneticAlgorithm.evolve, 50);
    }
};
