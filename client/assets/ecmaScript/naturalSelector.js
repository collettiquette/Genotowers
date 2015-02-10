genotower.naturalSelector = {

    scoreFitness : function () {

        return genotower.path.getLength();
    },

    evolve : function () {
        var bestScore = genotower.naturalSelector.scoreFitness();

        console.log(genotower.naturalSelector.scoreFitness());
        genotower.path.toggleWaypoints(false);
        genotower.maze.mutate();

        if (bestScore > genotower.naturalSelector.scoreFitness()) {
            genotower.maze.discardMutations();
        }
        genotower.path.toggleWaypoints(true);

        genotower.config.MONSTER_COUNT === 0 ? 
                setTimeout(genotower.naturalSelector.evolve, 1) :
                genotower.hoarde.charge();
    },
};

