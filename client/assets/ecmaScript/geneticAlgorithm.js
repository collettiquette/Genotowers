genotower.geneticAlgorithm = {


    evolve : function () {
      var bestTiles = genotower.map.tiles.slice(),
          bestScore = genotower.generation.scoreFitness(),
          bestTowers = genotower.towers.slice(),
          bestWalls = genotower.walls.slice();

      genotower.generation.mutateGenome(genotower.towers);
      genotower.generation.mutateGenome(genotower.walls);
      genotower.map.draw();

      if ( genotower.generation.scoreFitness() < bestScore ) {
        genotower.map.tiles = bestTiles;
        genotower.towers = bestTowers;
        genotower.walls = bestWalls;
        genotower.map.draw();
      }

    }
};