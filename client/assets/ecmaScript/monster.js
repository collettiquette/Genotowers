genotower.monster = Object.create(genotower.spriteContainer);

genotower.monster.health = genotower.config.MONSTER_HEALTH;
genotower.monster.spacesWalked = 0;

genotower.monster.initializeMonster = function () {
    this.place('monster');
    this.destroy();
};

genotower.monster.destroy = function () {
    this.sprite.exists = false;
};

genotower.monster.spawn = function () {
    this.sprite.exists = true;
    this.health = genotower.config.MONSTER_HEALTH;
    this.sprite.x = this.translatePosition(genotower.config.START_X);
    this.sprite.y = this.translatePosition(genotower.config.START_Y);
    this.spacesWalked = 0;
};

genotower.monster.checkFacing = function () {
    var lastSpace = genotower.path.getPath()[this.spacesWalked - 1],
        currentSpace = genotower.path.getPath()[this.spacesWalked],
        nextSpace = genotower.path.getPath()[this.spaces.Walked + 1];
};

genotower.monster.takeDamage = function (amount) {
    this.health -= amount;
    this.checkDeath;
};

genotower.monster.checkDeath = function () {
	if (this.health < 1) {
        this.destroy();
    }
};
