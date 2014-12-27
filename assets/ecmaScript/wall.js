genotower.wall = Object.create(genotower.chromosome);

genotower.wall.create = function () {
    this.place('wall');
    this.impassable = true;
};