genotower.monster = Object.create(genotower.animationContainer);

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
    var currentMonster = this;

    this.sprite.exists = true;
    this.health = genotower.config.MONSTER_HEALTH;
    this.sprite.x = this.translatePosition(genotower.config.START_X)+16;
    this.sprite.y = this.translatePosition(genotower.config.START_Y)+16;
    this.setFacing(this.checkFacing());
    this.spacesWalked = 0

    setTimeout(function () {currentMonster.walk(currentMonster)}, 
            genotower.config.TICK_SPEED);
};

genotower.monster.setFacing = function (facingDirection) {
    switch (facingDirection) {
        case 'north' :
            this.sprite.rotation = 0;
            break;
        case 'south' :
            this.sprite.rotation = this.toRadians(180);
            break;
        case 'east' :
            this.sprite.rotation = this.toRadians(90);
            break;
        case 'west' :
            this.sprite.rotation = this.toRadians(270);
            break;
    }
};

genotower.monster.moveDirection = function (facingDirection) {
    switch (facingDirection) {
        case 'north' :
            this.move(0, -32, genotower.config.TICK_SPEED);
            break;
        case 'south' :
            this.move(0, 32, genotower.config.TICK_SPEED);
            break;
        case 'east' :
            this.move(32, 0, genotower.config.TICK_SPEED);
            break;
        case 'west' :
            this.move(-32, 0, genotower.config.TICK_SPEED);
            break;
    }
};

genotower.monster.checkFacing = function () {
    var currentSpace = genotower.path.getPath()[this.spacesWalked],
        nextSpace = genotower.path.getPath()[this.spacesWalked + 1];

    if (nextSpace.x < currentSpace.x) {

        return 'west';

    } else if (nextSpace.x > currentSpace.x) {

        return 'east';

    } else if (nextSpace.y < currentSpace.y) {

        return 'north';

    } else {

        return 'south';
    }
};

genotower.monster.walk = function (currentMonster) {
    var direction;

    if (currentMonster.spacesWalked + 1  >= genotower.path.currentPath.length) {
        currentMonster.destroy();
        
        if (currentMonster === genotower.monsters[genotower.config.MONSTER_COUNT - 1]) {
            genotower.geneticAlgorithm.evolve();
        }
    }

    else if (genotower.path.getPath()[currentMonster.spacesWalked + 1]) {
        direction = currentMonster.checkFacing();
        currentMonster.setFacing(direction);
        currentMonster.moveDirection(direction);
        currentMonster.spacesWalked += 1;
    }
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
