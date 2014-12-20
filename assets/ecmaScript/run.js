genotower.run = {

    start : function () {
        this.game = new Phaser.Game(genotower.config.SCREEN_WIDTH, 
    	    genotower.config.SCREEN_HEIGHT, Phaser.AUTO, 'genotowerDefense',
    	    {preload: this.preload, create: this.create, update: 
    	    this.update, render: this.render});
    },
    

    preload : function () {
    
    },

    create : function () {
        this.game.world.setBounds(0, 0, genotower.config.WORLD_WIDTH, genotower.config.WORLD_HEIGHT);
        this.game.input.addPointer();
    },
        
    update : function () {
    },

    render : function () {
    }
};

window.onload = genotower.run.start;