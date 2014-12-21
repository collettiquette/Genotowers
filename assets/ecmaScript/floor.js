genotower.floor = Object.create(genotower.chromosome);

genotower.floor.create = function () {
    console.log("placing floor sprite, this = ", this);
    this.place('floor');
};