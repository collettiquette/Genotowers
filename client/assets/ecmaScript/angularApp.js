genotower.angularApp = angular.module("genotowerApp", []);

genotower.angularApp.controller("genotowerCtrl", function ($scope) {
    $scope.buttonText = "Start Game";
    $scope.userSettings = [
        {
            title: "Number of Towers",
            value: 10,
            min: 0,
            max: 20
        },
        {
            title: "Number of Walls",
            value: 30,
            min: 0,
            max: 60
        },
        {
            title: "Mutation Percentage",
            value: 10,
            min: 0,
            max: 100
        },
        {
            title: "Mutation Degree",
            value: 2,
            min: 0,
            max: 10
        }
    ];

    $scope.startGame = function () {
        genotower.config.TOWER_AMOUNT = ($scope.userSettings[0].value);
        genotower.config.WALL_AMOUNT = ($scope.userSettings[1].value);
        genotower.config.MUTATION_RATE = ($scope.userSettings[2].value / 100);
        genotower.config.MUTATION_DEGREE = ($scope.userSettings[3].value);

        $scope.startGame = function () {};
        $scope.buttonText = "Evolution in progress...";
        genotower.run.start();
    };
});
