genotower.config = {
    TOWER_IMAGE : "assets/images/tower.png",
    WAYPOINT_IMAGE : "assets/images/waypoint.png",
    WALL_IMAGE : "assets/images/wall.png",
    FLOOR_IMAGE : "assets/images/floor.png",
    TORCH_IMAGE : "assets/images/torch.png",
    MONSTER_IMAGE : "assets/images/monster.png",
    MONSTER_WOUNDED_IMAGE : "assets/images/monsterWounded.png",
    
    MONSTER_COUNT : 0,
    MONSTER_HEALTH : 50,
    MONSTER_SPACING : 1,

    TICK_SPEED : 10,
    
    MUTATION_RATE : .1,
    MUTATION_DEGREE : 2,

    TOWER_AMOUNT : 10,
    WALL_AMOUNT : 30,

    MAP_WIDTH : 10,
    MAP_HEIGHT : 10
};    
    
genotower.config.SCREEN_WIDTH = (genotower.config.MAP_WIDTH * 32);
genotower.config.SCREEN_HEIGHT = (genotower.config.MAP_HEIGHT * 32);
genotower.config.WORLD_WIDTH = genotower.config.SCREEN_WIDTH;
genotower.config.WORLD_HEIGHT = genotower.config.SCREEN_HEIGHT;

genotower.config.START_X = 0;
genotower.config.START_Y = (genotower.config.MAP_HEIGHT - 1);
genotower.config.END_X = (genotower.config.MAP_HEIGHT - 1);
genotower.config.END_Y = 0;

genotower.config.SPAWN_TIME = (genotower.config.TICK_SPEED *
                               genotower.config.MONSTER_SPACING);
