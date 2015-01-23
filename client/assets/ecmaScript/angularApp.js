genotower.angularApp = angular.module("genotowerApp", []);

genotower.angularApp.controller("genotowerCtrl", function ($scope) {
    var i = 0;

    $scope.buttonText = "Start Game";
    $scope.userSettings = [
        {
            title: "Amount of Towers",
            tag: "towerAmount",
            value: 10,
            min: 0,
            max: 30
        },
        {
            title: "Amount of Walls",
            tag: "wallAmount",
            value: 30,
            min: 0,
            max: 50
        },
        {
            title: "Mutation Percentage",
            tag: "mutationPercentage",
            value: 10,
            min: 0,
            max: 100
        },
        {
            title: "Degree of Mutation",
            tag: "mutationDegree",
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
