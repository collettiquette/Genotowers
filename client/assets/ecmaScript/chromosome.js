genotower.chromosome = {

    x : 0,
    y : 0,
    sprite : {},
    impassable : false,

    shouldMutate : function (mutationRate) {
        return Math.random() <= mutationRate;
    },

    setPosition : function (x, y) {
        this.x = x;
        this.y = y;
        genotower.map.tiles[x][y] = this;
    },

    changeInPosition : function (mutationDegree) {
        return Math.floor(Math.random() * mutationDegree);
    },

    mutate : function (mutationDegree) {
        var newX = null,
            newY = null;

        do {
            newX = this.x + genotower.randomSign(this.changeInPosition(mutationDegree));
            newY = this.y + genotower.randomSign(this.changeInPosition(mutationDegree));
        } while (!genotower.map.checkBounds(newX, newY))

        return  [this, genotower.map.tiles[newX][newY]];
    },

    translatePosition : function (arrayCoordinate) {
        return arrayCoordinate * 32;
    },

    place : function (imageKey) {
        this.sprite = genotower.run.game.add.sprite(this.translatePosition(this.x),
                this.translatePosition(this.y), imageKey);
    },

    syncSpritePosition : function () {
        this.sprite.x = this.translatePosition(this.x);
        this.sprite.y = this.translatePosition(this.y);
        
        if (this.torchSprite) {
            this.torchSprite.x = this.translatePosition(this.x);
            this.torchSprite.y = this.translatePosition(this.y);
        }
    }
};
