genotower.spriteContainer = {
    x : 0,
    y : 0,
    sprite : {},

    translatePosition : function (arrayCoordinate) {
        return arrayCoordinate * 32;
    },

    place : function (imageKey) {
        this.sprite = genotower.run.game.add.sprite(this.translatePosition(this.x),
                this.translatePosition(this.y), imageKey);
    },

    // setPosition is used by chromosome and floor, but probably not monsters. May not go here.
    setPosition : function (x, y) {
        this.x = x;
        this.y = y;
        genotower.map.setTile(x, y, this);
    }
};
