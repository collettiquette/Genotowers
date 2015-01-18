for (i=0;i<1000;i+=1) {
    setTimeout(function () {
        genotower.generation.mutateGenome(genotower.towers);
        genotower.generation.mutateGenome(genotower.walls);
        genotower.map.draw();
    }, 1000);
}