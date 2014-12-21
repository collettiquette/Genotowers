genotower.chromosome = {
    x : 0,
    y : 0,
    sprite : {},
    
    shouldMutate : function (mutationRate) {
        return Math.random() <= mutationRate;
    },
    
    changeInPosition : function (mutationDegree) {
        return Math.floor(Math.random() * mutationDegree);
    },
    
    mutate : function (mutationRate, mutationDegree) {
        
        if (this.shouldMutate(mutationRate)) {
            this.x += genotower.randomSign(this.changeInPosition(mutationDegree));
            this.y += genotower.randomSign(this.changeInPosition(mutationDegree));
        }
    }
    
    place : function (imageKey) {
        this.sprite = genotower.run.game.add.sprite(this.x, this.y, imageKey);
    };

    
};