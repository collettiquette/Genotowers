genotower.floor = Object.create(genotower.chromosome);

genotower.floor.create = function () {
    this.place('floor');
    this.torchSprite = genotower.run.game.add.sprite(
        this.translatePosition(this.x),
        this.translatePosition(this.y), "torch");
    this.torchSprite.exists = false;
};