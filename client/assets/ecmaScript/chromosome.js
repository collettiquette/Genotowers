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
        genotower.map.setTile(x, y, this);
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

        return  { tile1 : this, tile2 : genotower.map.getTile(newX, newY) };
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
        
        if (this.waypointSprite) {
            this.waypointSprite.x = this.sprite.x;
            this.waypointSprite.y = this.sprite.y;
        }
    }
};
