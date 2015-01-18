genotower.wall = Object.create(genotower.chromosome);
genotower.wall.impassable = true;

genotower.wall.create = function () {
    this.place('wall');
};