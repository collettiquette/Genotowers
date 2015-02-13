genotower.naturalSelector = (function () {
    var bestScore;

    return {

        scoreFitness : function () {

            genotower.config.MONSTER_COUNT === 0 ? setTimeout(genotower.
                    naturalSelector.evolve.bind(null, 
                    genotower.path.getLength()), genotower.config.TICK_SPEED) :
                    genotower.horde.charge();
        },

        evolve : function (newScore) {
            bestScore = bestScore || newScore;
            console.log(bestScore);

            (bestScore > newScore) ? genotower.maze.discardLastMutation() : 
                    bestScore = newScore;
            genotower.maze.mutate();
            genotower.naturalSelector.scoreFitness();
        }
    };
}());
