var Grid = function (width, height, Tile) {
  var grid = [];

  var getWidth = function () {
    return width;
  };

  var getHeight = function() {
    return height;
  };

  var create = function() {
    var x = 0,
      y = 0;

    for (x = 0; x < getWidth(); x += 1) {
      grid.push([]);

      for (y = 0; y < getHeight(); y += 1) {
        grid[x].push(new Tile);
      }
    }
  };

  var getTile = function(x, y) {

    if (!(grid[x] && grid[x][y])) {
      throw 'Error : coordinate (' + x + ', ' + y + ') is out of bounds.';
    }
    return grid[x][y];
  };
  
  var replaceTile = function(x, y, tileObj) {
    grid[x][y] = tileObj;
  };

  create();

  return {
    getHeight: getHeight,
    getWidth: getWidth,
    getTile: getTile,
    replaceTile: replaceTile,
  };
};

module.exports = Grid;

