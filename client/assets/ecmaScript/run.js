genotower.run = {

    start : function () {
        console.log(genotower.run);
        genotower.run.game = new Phaser.Game(genotower.config.SCREEN_WIDTH, 
        	    genotower.config.SCREEN_HEIGHT, Phaser.AUTO, 
                'genotowerDefense', {preload: genotower.run.preload, create: 
                genotower.run.create, update: genotower.run.update, render: 
                genotower.run.render});
    },
    
    preload : function () {
        genotower.run.game.load.image('tower', genotower.config.TOWER_IMAGE);
        genotower.run.game.load.image('wall', genotower.config.WALL_IMAGE);
        genotower.run.game.load.image('floor', genotower.config.FLOOR_IMAGE);
        genotower.run.game.load.image('torch', genotower.config.TORCH_IMAGE);
        genotower.run.game.load.image('monster', genotower.config.MONSTER_IMAGE);
        genotower.run.game.load.image('monsterWounded', 
                genotower.config.MONSTER_WOUNDED_IMAGE);
    },

    create : function () {
        genotower.run.game.world.setBounds(0, 0, genotower.config.WORLD_WIDTH, 
                genotower.config.WORLD_HEIGHT);
        genotower.run.game.input.addPointer();
//        genotower.map.initialize();
        genotower.generateGenotype(genotower.config.WALL_AMOUNT, 
                genotower.config.TOWER_AMOUNT);
        genotower.map.draw();

        setTimeout(function () {
            setInterval(function () {
                genotower.geneticAlgorithm.evolve();
            }, 50);
        }, 1000);
    },
        
    update : function () {
        
    },

    render : function () {
        
    }
};

window.onload = genotower.run.start;
