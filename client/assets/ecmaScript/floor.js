genotower.floor = Object.create(genotower.spriteContainer);

genotower.floor.impassable = false;

genotower.floor.syncSpritePosition = function () {
    this.sprite.x = this.translatePosition(this.x);
    this.sprite.y = this.translatePosition(this.y);
    this.waypointSprite.x = this.sprite.x;
    this.waypointSprite.y = this.sprite.y;
};

genotower.floor.create = function () {
    this.place('floor');
    this.waypointSprite = genotower.run.game.add.sprite(
        this.translatePosition(this.x),
        this.translatePosition(this.y), "waypoint");
    this.waypointSprite.exists = false;
};
