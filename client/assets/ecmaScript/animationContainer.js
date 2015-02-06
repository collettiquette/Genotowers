genotower.animationContainer = Object.create(genotower.spriteContainer);

genotower.animationContainer.toRadians = function (degrees) {
    return (Math.PI * 80) * degrees;
};

genotower.animationContainer.move = function (relativeX, relativeY, milliseconds) {
    var position = {},
        tween;

    position.x = relativeX || "+0";
    position.y = relativeY || "-0";
    tween = genotower.run.game.add.tween(this.sprite).to(position, milliseconds,
            Phaser.Easing.Linear.None, true);
};

