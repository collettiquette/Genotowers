genotower.run = {

    start : function () {
        this.game = new Phaser.Game(genotower.config.SCREEN_WIDTH, 
    	    genotower.config.SCREEN_HEIGHT, Phaser.AUTO, 'genotowerDefense',
    	    {preload: this.preload, create: this.create, update: 
    	    this.update, render: this.render});
    },
    
    preload : function () {
        this.game.load.image('tower', genotower.config.TOWER_IMAGE);
        this.game.load.image('wall', genotower.config.WALL_IMAGE);
        this.game.load.image('floor', genotower.config.FLOOR_IMAGE);
        this.game.load.image('torch', genotower.config.TORCH_IMAGE);
        this.game.load.image('monster', genotower.config.MONSTER_IMAGE);
        this.game.load.image('monsterWounded', genotower.config.MONSTER_WOUNDED_IMAGE);
    },

    create : function () {
        this.game.world.setBounds(0, 0, genotower.config.WORLD_WIDTH, genotower.config.WORLD_HEIGHT);
        this.game.input.addPointer();
        genotower.map.createFloor();
    },
        
    update : function () {
    },

    render : function () {
    }
};

window.onload = genotower.run.start;