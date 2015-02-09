genotower.generation = {

    mutateGenome : function (obstacles) {
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
    },

    scoreFitness : function () {
        
        return genotower.path.getLength();
    }
};
