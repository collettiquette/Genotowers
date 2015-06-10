genotower.monster = Object.create(genotower.animationContainer);

genotower.monster.health = genotower.config.MONSTER_HEALTH;
genotower.monster.spacesWalked = 0;

genotower.monster.create = function () {
    this.place('monster');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.kill();
};

genotower.monster.kill = function () {
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

    setTimeout(function () {currentMonster.walk()}, 
            genotower.config.TICK_SPEED);
};

genotower.monster.charge = function() {
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.spacesWalked = 0;
};

genotower.monster.setFacing = function (facingDirection) {
// Phaser rotations are in radians.
    switch (facingDirection) {
        case 'north' :
            this.sprite.rotation = 0;
            break;
        case 'south' :
            this.sprite.rotation = 3.14;
            break;
        case 'east' :
            this.sprite.rotation = 1.57;
            break;
        case 'west' :
            this.sprite.rotation = -1.57;
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
    var currentSpace = genotower.path.getSquare(this.spacesWalked),
        nextSpace = genotower.path.getSquare(this.spacesWalked + 1);

    if (nextSpace.x < currentSpace.x) {

        return 'west';

    } else if (nextSpace.x > currentSpace.x) {

        return 'east';

    } else if (nextSpace.y < currentSpace.y) {

        return 'north';

    } else if (nextSpace.y > currentSpace.y) {

        return 'south';
    }
};

genotower.monster.walk = function () {
    var direction;

    this.checkDeath();

    if (this.isLive()) {
        direction = this.checkFacing();
        this.setFacing(direction);
        this.moveDirection(direction);
        this.spacesWalked += 1;

        // Damage is dealt by walking as a temporary stand-in for missiles.
        this.takeDamage(1);
    }
};

genotower.monster.takeDamage = function (amount) {
    this.health -= amount;
    genotower.horde.takeDamage(amount);
    this.checkDeath;
};

genotower.monster.checkDeath = function () {
    if (this.health < 1 || this.spacesWalked + 1 >= 
            genotower.path.getLength()) {
        this.kill();
        genotower.horde.checkRanks();
    }
};

genotower.monster.isLive = function () {
    return this.sprite.exists;
};

