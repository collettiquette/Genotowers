genotower.floor = Object.create(genotower.chromosome);

genotower.floor.create = function () {
    this.place('floor');
    this.waypointSprite = genotower.run.game.add.sprite(
        this.translatePosition(this.x),
        this.translatePosition(this.y), "waypoint");
    this.waypointSprite.exists = false;
};