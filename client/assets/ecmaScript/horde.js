genotower.horde = (function () {
    var monsters = [];

    return {

        create : function () {    
            var i = 0,
                currentMonster;
        
            while (i < genotower.config.MONSTER_COUNT) {
                currentMonster = Object.create(genotower.monster);
                currentMonster.create();
                monsters.push(currentMonster);
                i += 1;
            }
        },

        charge : function () {
            var i = 0,
                max = monsters.length,
                spawnTime,
                currentMonster;

            for (i = 0; i < max; i += 1) {
                currentMonster = monsters[i];
                spawnTime = (i * genotower.config.TICK_SPEED * 
                        genotower.config.MONSTER_SPACING);

                currentMonster.sprite.x = 0;
                currentMonster.sprite.y = 0;
                currentMonster.spacesWalked = 0;

                setTimeout(function () {
                    currentMonster.spawn();
                }, spawnTime);
            }
        },

        checkRanks : function () {
            var i = 0,
                max = monsters.length,
                liveMonsters;

            for (i = 0; i < max; i += 1) {

                if (monsters[i].isLive()) {
                    liveMonsters = true;
                }
            }

            if (liveMonsters !== true) {
                genotower.naturalSelector.evolve();
            }
        }
    };
}());

