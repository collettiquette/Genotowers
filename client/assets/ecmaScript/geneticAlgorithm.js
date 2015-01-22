genotower.geneticAlgorithm = {

    evolve : function () {

        genotower.generation.mutateGenome(genotower.towers);
        genotower.generation.mutateGenome(genotower.walls);
        genotower.map.draw();
        console.log(genotower.generation.scoreFitness());
    }
};


/*
State of The Code:
A line in chromosome.mutate has been partially commented out, making individual
tiles no longer check to see if they contribute to path length or not. The 
commented out function call is generation.verify(), and I intend to put it back
in to the geneticAlgorithm.evolve function so that we can check improvements in
batches. I further intend to modify verify() so that it takes arrays of tiles
instead of specific tile coordinates. Here is the totally broken code I was 
working on before I reverted to the last viable state:

genotower.geneticAlgorithm = {

    evolve : function () {
        var bestScore,
            newScore;

        genotower.generation.mutateGenome(genotower.towers);
        genotower.generation.mutateGenome(genotower.walls);
        genotower.map.draw();

        genotower.generation.verify([genotower.towers, genotower.walls]) ? 
                return this.evolve() : 
        console.log(genotower.generation.scoreFitness());
    }
};
*/