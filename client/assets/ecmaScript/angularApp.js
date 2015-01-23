genotower.angularApp = angular.module("genotowerApp", []);

genotower.angularApp.controller("genotowerCtrl", function ($scope) {

    $scope.buttonText = "Start Game"

    $scope.mutationRate = 10;

    $scope.startGame = function () {
        genotower.config.MUTATION_RATE = ($scope.mutationRate / 100);
        $scope.buttonText = "Evolution in progress...";
        $scope.startGame = function () {};
        genotower.run.start();
    };
});
