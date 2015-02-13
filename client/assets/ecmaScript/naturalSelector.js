genotower.naturalSelector = (function () {
    var bestScore;

    return {

        exertPressure : function () {

            genotower.config.MONSTER_COUNT === 0 ? setTimeout(genotower.
                    naturalSelector.evolve.bind(null, 
                    genotower.path.getLength()), genotower.config.TICK_SPEED) :
                    genotower.horde.charge();
        },

        evolve : function (fitnessScore) {
            bestScore = bestScore || fitnessScore;
            console.log("Best Score: " + bestScore + 
                    ",            Mutations Since Last Progression:");

            (bestScore > fitnessScore) ? genotower.maze.discardLastMutation() :
                    bestScore = fitnessScore;
            genotower.maze.mutate();
            genotower.naturalSelector.exertPressure();
        }
    };
}());

