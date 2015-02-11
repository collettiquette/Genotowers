genotower.horde = (function () {
    var monsters = [],
        iterateOverMonsters = function (callback) {
            var i = 0;

            for (i = 0; i < genotower.config.MONSTER_COUNT; i += 1) {
                callback(i);
            }
        };

    return {

        create : function () {    
            var currentMonster;

            iterateOverMonsters(function () {  
                currentMonster = Object.create(genotower.monster);
                currentMonster.create();
                monsters.push(currentMonster);
            });
        },

        charge : function () {
            var spawnTime,
                currentMonster;

            iterateOverMonsters(function (i) {  
                currentMonster = monsters[i];
                spawnTime = (i * genotower.config.TICK_SPEED * 
                        genotower.config.MONSTER_SPACING);
                currentMonster.sprite.x = 0;
                currentMonster.sprite.y = 0;
                currentMonster.spacesWalked = 0;

                setTimeout(function () {
                    currentMonster.spawn();
                }, spawnTime);
            });
        },

        checkRanks : function () {
            var liveMonsters;

            iterateOverMonsters(function (i) {

                if (monsters[i].isLive()) {
                    liveMonsters = true;
                }
            });

            if (liveMonsters !== true) {
                genotower.naturalSelector.evolve();
            }
        }
    };
}());

