var genotower = {
    
    walls : [],
    towers : [],
    
    randomSign : function (i){
        return Math.random() < 0.5 ? -1 * i : i;
    },
    
    placeObstacle : function (obstacle, count) {
        var i = 0,
            randomPosition = null,
            obstacleList = [];

        for (i = 0; i < count; i += 1) {
            currentObstacle = Object.create(obstacle);
            randomPosition = genotower.map.getRandomPosition();
            
            while (genotower.map.tiles[randomPosition[0]][randomPosition[1]].impassable || (randomPosition[0] === genotower.config.START_X && randomPosition[1] === genotower.config.START_Y)) {
                randomPosition = genotower.map.getRandomPosition();
            }
            
            genotower.map.tiles[randomPosition[0]][randomPosition[1]] = currentObstacle; 
            currentObstacle.setPosition(randomPosition[0], randomPosition[1]);
            obstacleList.push(currentObstacle);
        }
        return obstacleList;
    },

    generateGenotype : function (wallCount, towerCount) {
        
        do {
            genotower.map.initialize();
            this.walls = this.placeObstacle(genotower.wall, wallCount);
            this.towers = this.placeObstacle(genotower.tower, towerCount);
            genotower.path.setPath();
        } while (!genotower.path.isValid())
    }
};

// Defines Object.create if it doesn't exist.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}