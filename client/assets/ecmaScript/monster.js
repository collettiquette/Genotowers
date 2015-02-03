genotower.monster = Object.create(genotower.spriteContainer);

genotower.monster.initializeMonster = function () {
    this.place('monster');
    this.destroy();
};

genotower.monster.destroy = function () {
    this.sprite.exists = false;
};

genotower.monster.spawn = function () {
    this.sprite.exists = true;
    this.sprite.x = this.translatePosition(genotower.config.START_X);
    this.sprite.y = this.translatePosition(genotower.config.START_Y);
    this.pathTravelled = 0;
};

genotower.monster.pathTravelled = 0;

genotower.monster.health = genotower.config.MONSTER_HEALTH;

genotower.monster.takeDamage = function (amount) {
    this.health -= amount;
};

genotower.monster.checkFacing = function () {};

genotower.monster.checkDeath = function () {
	if (this.health < 1) {
        this.destroy();
    }
};
