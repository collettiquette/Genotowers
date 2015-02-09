genotower.run = {

    start : function () {
        console.log(genotower.run);
        genotower.run.game = new Phaser.Game(genotower.config.SCREEN_WIDTH,
                genotower.config.SCREEN_HEIGHT, Phaser.AUTO,
                'genotowerDefense', {preload: genotower.run.preload, create:
                genotower.run.create});
    },

    preload : function () {
        var images = [
                {
                    key: 'tower',
                    place: genotower.config.TOWER_IMAGE
                },
                {
                    key: 'wall',
                    place: genotower.config.WALL_IMAGE
                },
                {
                    key: 'floor',
                    place: genotower.config.FLOOR_IMAGE
                },
                {
                    key: 'torch',
                    place: genotower.config.TORCH_IMAGE
                },
                {
                    key: 'waypoint',
                    place: genotower.config.WAYPOINT_IMAGE
                },
                {
                    key: 'monster',
                    place: genotower.config.MONSTER_IMAGE
                },
                {
                    key: 'monsterWounded',
                    place: genotower.config.MONSTER_WOUNDED_IMAGE
                }
            ],
            i = 0,
            max = images.length;

        for (i = 0; i < max; i += 1) {
            genotower.run.game.load.image(images[i].key, images[i].place);
        }
    },

    create : function () {
        genotower.maze.create();
        genotower.hoarde.create();
 
        setTimeout(genotower.geneticAlgorithm.evolve, 1000);

    }
};
