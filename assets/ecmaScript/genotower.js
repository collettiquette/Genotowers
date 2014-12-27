var genotower = {
    
    walls : [],
    towers : [],
    
    randomSign : function (i){
        return Math.random() < 0.5 ? -1 * i : i;
    },
    
    generateGenotype : function (walls, towers) {
        
    },
    
    createWalls : function (wallCount) {
        var wall = null;
        
        for (w = 0; w < wallCount; w += 1) {
            wall = Object.create(genotower.wall);
//            wall.setPosition();
        }   
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