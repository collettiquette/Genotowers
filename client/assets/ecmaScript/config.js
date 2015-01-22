genotower.config = {
    TOWER_IMAGE : "assets/images/tower.png",
    WALL_IMAGE : "assets/images/wall.png",
    FLOOR_IMAGE : "assets/images/floor.png",
    TORCH_IMAGE : "assets/images/torch.png",
    MONSTER_IMAGE : "assets/images/monster.png",
    MONSTER_WOUNDED_IMAGE : "assets/images/monsterWounded.png",
    
    MUTATION_RATE : .05,
    MUTATION_DEGREE : 2,

    TOWER_AMOUNT : 60,
    WALL_AMOUNT : 100,

    MAP_WIDTH : 20,
    MAP_HEIGHT : 20
};    
    
genotower.config.SCREEN_WIDTH = (genotower.config.MAP_WIDTH * 32);
genotower.config.SCREEN_HEIGHT = (genotower.config.MAP_HEIGHT * 32);
genotower.config.WORLD_WIDTH = genotower.config.SCREEN_WIDTH;
genotower.config.WORLD_HEIGHT = genotower.config.SCREEN_HEIGHT;

genotower.config.START_X = 0;
genotower.config.START_Y = (genotower.config.MAP_HEIGHT - 1);
genotower.config.END_X = (genotower.config.MAP_HEIGHT - 1);
genotower.config.END_Y = 0;
