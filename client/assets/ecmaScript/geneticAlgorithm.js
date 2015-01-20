genotower.geneticAlgorithm = {

    evolve : function () {
      genotower.generation.mutateGenome(genotower.towers);
      genotower.generation.mutateGenome(genotower.walls);
      genotower.map.draw();
      console.log(genotower.generation.scoreFitness());
    }
};