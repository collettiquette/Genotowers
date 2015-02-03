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
    this.checkFacing();
    this.spacesWalked = 0;
};

genotower.monster.setFacing = function (facingDirection) {
    switch (facingDirection) {
            case 'north' :
                this.sprite.rotation = 0;
            case 'south' :
                this.sprite.rotation = 180;
            case 'east' :
                this.sprite.rotation = 90;
            case 'west' :
                this.sprite.rotation = 270;
    }
};

genotower.monster.checkFacing = function () {
    var lastSpace = genotower.path.getPath()[this.spacesWalked - 1],
        currentSpace = genotower.path.getPath()[this.spacesWalked],
        nextSpace = genotower.path.getPath()[this.spacesWalked + 1];
    
    if (nextSpace[0] < currentSpace[0]) {
        this.setFacing('west');
    } else if (nextSpace[0] > currentSpace[0]) {
        this.setFacing('east');
    } else if (nextSpace[1] < currentSpace[1]) {
        this.setFacing('north');
    } else {this.setFacing('south')};
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
