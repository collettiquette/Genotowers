var genotower = {
    
    randomSign : function (i){
        return Math.random() < 0.5 ? -1 * i : i;
    },
    
    generateGenotype : function (walls, towers) {
        
    },
    
    

};

// Defines Object.create if it doesn't exist.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}