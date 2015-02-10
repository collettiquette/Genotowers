genotower.chromosome = Object.create(genotower.spriteContainer);

genotower.chromosome.impassable = true;

genotower.chromosome.shouldMutate = function (mutationRate) {
    return Math.random() <= mutationRate;
};

genotower.chromosome.changeInPosition = function (mutationDegree) {
    return Math.floor(Math.random() * mutationDegree);
};

genotower.chromosome.mutate = function (mutationDegree) {
    var newX = null,
        newY = null;

    do {
        newX = this.x + genotower.randomSign(this.changeInPosition(mutationDegree));
        newY = this.y + genotower.randomSign(this.changeInPosition(mutationDegree));
    } while (!genotower.map.checkBounds(newX, newY))

    return  { tile1 : this, tile2 : genotower.map.getTile(newX, newY) };
};

genotower.chromosome.syncSpritePosition = function () {
    this.sprite.x = this.translatePosition(this.x);
    this.sprite.y = this.translatePosition(this.y);
};

