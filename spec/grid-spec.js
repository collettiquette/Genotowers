var Grid = require('../client/assets/javascripts/grid.js');

describe("grid", function () {
  var grid;
  beforeEach(function(){
    grid = new Grid(10, 10, function () {
      return {};
    });
  });

  describe("create", function() {
    it("should should make a 10 by 10 grid", function () {
      expect(grid.getHeight()).toEqual(10);
      expect(grid.getWidth()).toEqual(10);
      expect(grid.getTile(grid.getWidth() - 1, grid.getHeight() - 1)).toEqual({});
    });
  });

  describe("getTile", function() {
    it("should return the tile at a specific place in the grid.", function () {
      var tile = "FooBar";
      grid.replaceTile(0,1,tile);
      expect(grid.getTile(0, 1)).toEqual("FooBar");
    });

    it("should throw an error if x or y are out of bounds.", function() {
      expect(function() { grid.getTile(15, 15) }).toThrow();
    });
  });

  describe("replaceTile", function() {
    it("should replace a tile at a location with a given tile.", function () {
      var tile = "FooBar";
      grid.replaceTile(0,1,tile);
      expect(grid.getTile(0, 1)).toEqual("FooBar");
    });
  });
});

