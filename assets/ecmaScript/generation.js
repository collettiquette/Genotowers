genotower.generation = {
    mutateGenome : function (obstacles) {
        var i = 0,
            max = obstacles.length;
        
        for (i = 0; i < max; i += 1) {
            obstacles[i].mutate();    
        }
    },
};