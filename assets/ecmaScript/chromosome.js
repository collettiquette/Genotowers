genotower.chromosome = {
    
    x : 0,
    y : 0,
    sprite : {},
    
    shouldMutate : function (mutationRate) {
        return Math.random() <= mutationRate;
    },
    
    setPosition : function (x, y) {
        this.x = x;
        this.y = y;
    },
    
    changeInPosition : function (mutationDegree) {
        return Math.floor(Math.random() * mutationDegree);
    },
    
    mutate : function (mutationRate, mutationDegree) {
        
        if (this.shouldMutate(mutationRate)) {
            this.x += genotower.randomSign(this.changeInPosition(mutationDegree));
            this.y += genotower.randomSign(this.changeInPosition(mutationDegree));
        }
    },
    
    translatePosition : function (arrayCoordinate) {
        return arrayCoordinate === 0 ? 0 : (arrayCoordinate*32);
    },
    
    place : function (imageKey) {
        this.sprite = genotower.run.game.add.sprite(this.translatePosition(this.x),
                this.translatePosition(this.y), imageKey);
    }    
};