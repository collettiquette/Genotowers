genotower.hoarde = {

    create : function () {    
        var i = 0,
            currentMonster;
        
        while (i < genotower.config.MONSTER_COUNT) {
            currentMonster = Object.create(genotower.monster);
            currentMonster.initializeMonster();
            genotower.monsters.push(currentMonster);
            i += 1;
        }
    },

    charge : function () {
        var i = 0,
            max = genotower.monsters.length,
            spawnTime,
            currentMonster;

        for (i = 0; i < max; i += 1) {
            currentMonster = genotower.monsters[i];
            spawnTime = (i * genotower.config.TICK_SPEED * 
                    genotower.config.MONSTER_SPACING);
            setTimeout(function () {
                currentMonster.spawn();
            }, spawnTime);
        }
    }
};
