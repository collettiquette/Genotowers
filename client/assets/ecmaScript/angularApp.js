genotower.angularApp = angular.module("genotowerApp", []);

genotower.angularApp.controller("genotowerCtrl", function ($scope) {

    $scope.mutationRate = 10;

    $scope.startGame = function () {
        genotower.config.MUTATION_RATE = ($scope.mutationRate / 100);
        genotower.run.start();
    };
});
