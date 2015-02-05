genotower.monster = Object.create(genotower.spriteContainer);

genotower.monster.health = genotower.config.MONSTER_HEALTH;
genotower.monster.spacesWalked = 0;

genotower.monster.initializeMonster = function () {
    this.place('monster');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.destroy();
};

genotower.monster.destroy = function () {
    this.sprite.exists = false;
};

genotower.monster.spawn = function () {
    this.sprite.exists = true;
    this.health = genotower.config.MONSTER_HEALTH;
    this.sprite.x = this.translatePosition(genotower.config.START_X)+16;
    this.sprite.y = this.translatePosition(genotower.config.START_Y)+16;
    this.checkFacing();
    this.spacesWalked = 0;
};

genotower.monster.setFacing = function (facingDirection) {
    switch (facingDirection) {
            case 'north' :
                this.sprite.rotation = 0;
            case 'south' :
                this.sprite.rotation = Math.radians(180);
            case 'east' :
                this.sprite.rotation = Math.radians(90);
            case 'west' :
                this.sprite.rotation = Math.radians(270);
    }
};

genotower.monster.checkFacing = function () {
    var currentSpace = genotower.path.getPath()[this.spacesWalked],
        nextSpace = genotower.path.getPath()[this.spacesWalked + 1];
    
    if (nextSpace.x < currentSpace.x) {
        this.setFacing('west');
    } else if (nextSpace.x > currentSpace.x) {
        this.setFacing('east');
    } else if (nextSpace.y < currentSpace.y) {
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
