genotower.run = {

    start : function () {
        genotower.run.game = new Phaser.Game(genotower.config.SCREEN_WIDTH,
                genotower.config.SCREEN_HEIGHT, Phaser.AUTO,
                'genotowerDefense', {preload: genotower.run.preload, create:
                genotower.run.create});
    },

    preload : function () {
        var images = [
                {
                    key : 'tower',
                    filePath : genotower.config.TOWER_IMAGE
                },
                {
                    key : 'wall',
                    filePath : genotower.config.WALL_IMAGE
                },
                {
                    key : 'floor',
                    filePath : genotower.config.FLOOR_IMAGE
                },
                {
                    key : 'torch',
                    filePath : genotower.config.TORCH_IMAGE
                },
                {
                    key : 'waypoint',
                    filePath : genotower.config.WAYPOINT_IMAGE
                },
                {
                    key : 'monster',
                    filePath : genotower.config.MONSTER_IMAGE
                },
                {
                    key : 'monsterWounded',
                    filePath : genotower.config.MONSTER_WOUNDED_IMAGE
                }
            ],
            i = 0,
            max = images.length;

        for (i = 0; i < max; i += 1) {
            genotower.run.game.load.image(images[i].key, images[i].filePath);
        }
    },

    create : function () {
        genotower.maze.create();
        genotower.horde.create();
 
        setTimeout(genotower.naturalSelector.exertPressure, 1000);
    }
};

