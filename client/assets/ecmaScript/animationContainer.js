genotower.animationContainer = Object.create(genotower.spriteContainer);

genotower.animationContainer.toRadians = function (degrees) {
    return (Math.PI * 80) * degrees;
};

genotower.animationContainer.move = function (x, y, milliseconds) {
    var position = {},
        tween = null,
        convertValue = function (i, key) {
            i = i || 0;
            i >= 0 ? position[key] = "+" + i : position[key] = i.toString();
        };

    convertValue(x, "x");
    convertValue(y, "y");

    tween = genotower.run.game.add.tween(this.sprite).to(position, milliseconds,
            Phaser.Easing.Linear.None, true);

    tween.onComplete.add(function () {
        this.walk(this);
    }, this);

};

