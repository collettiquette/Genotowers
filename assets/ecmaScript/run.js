genotower.run = {
    
    that : this,
    
    start : function () {
        console.log(that);
        that.game = new Phaser.Game(genotower.config.SCREEN_WIDTH, 
    	    genotower.config.SCREEN_HEIGHT, Phaser.AUTO, 'genotowerDefense',
    	    {preload: that.preload, create: that.create, update: 
    	    that.update, render: that.render});
    },
    
    preload : function () {
        that.game.load.image('tower', genotower.config.TOWER_IMAGE);
        that.game.load.image('wall', genotower.config.WALL_IMAGE);
        that.game.load.image('floor', genotower.config.FLOOR_IMAGE);
        that.game.load.image('torch', genotower.config.TORCH_IMAGE);
        that.game.load.image('monster', genotower.config.MONSTER_IMAGE);
        that.game.load.image('monsterWounded', genotower.config.MONSTER_WOUNDED_IMAGE);
    },

    create : function () {
        that.game.world.setBounds(0, 0, genotower.config.WORLD_WIDTH, genotower.config.WORLD_HEIGHT);
        that.game.input.addPointer();
        genotower.map.createFloor();
    },
        
    update : function () {
    },

    render : function () {
    }
};


window.onload = genotower.run.start;