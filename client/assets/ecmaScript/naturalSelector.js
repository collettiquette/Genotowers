genotower.naturalSelector = (function () {
    var bestScore;

    return {

        scoreFitness : function () {

            return genotower.path.getLength();
        },

        evolve : function () {
            var newScore;

            if (!bestScore) {
                bestScore = genotower.naturalSelector.scoreFitness();
            }

            console.log(bestScore);
            genotower.maze.mutate();
            newScore = genotower.naturalSelector.scoreFitness();

            (bestScore > newScore) ? genotower.maze.discardLastMutation() : 
                    bestScore = newScore;

            genotower.config.MONSTER_COUNT === 0 ? 
                    setTimeout(genotower.naturalSelector.evolve, 1) :
                    genotower.horde.charge();
        }
    };
}());
