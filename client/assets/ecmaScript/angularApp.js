genotower.angularApp = angular.module("genotowerApp", []);

genotower.angularApp.controller("genotowerCtrl", function ($scope) {

    $scope.userSettings = [
        {
            title: "Number of Towers",
            value: 10,
            sign: "",
            min: 0,
            max: 20
        },
        {
            title: "Number of Walls",
            value: 30,
            sign: "",
            min: 0,
            max: 60
        },
        {
            title: "Mutation Rate",
            value: 10,
            sign: "%",
            min: 0,
            max: 100
        },
        {
            title: "Mutation Degree",
            value: 2,
            sign: "",
            min: 0,
            max: 10
        },
        {
            title: "Tick Speed",
            value: 10,
            sign: " milliseconds",
            min: 1,
            max: 1000
        },
        {
            title: "Number of Monsters",
            value: 0,
            sign: "",
            min: 0,
            max: 1
        },
        {
            title: "Monster Health",
            value: 50,
            sign: "HP",
            min: 1,
            max: 100
        }
    ];

    $scope.buttonText = "Start Game";

    $scope.startGame = function () {
        genotower.config.TOWER_AMOUNT = ($scope.userSettings[0].value);
        genotower.config.WALL_AMOUNT = ($scope.userSettings[1].value);
        genotower.config.MUTATION_RATE = ($scope.userSettings[2].value / 100);
        genotower.config.MUTATION_DEGREE = ($scope.userSettings[3].value);
        genotower.config.TICK_SPEED = ($scope.userSettings[4].value);
        genotower.config.MONSTER_COUNT = ($scope.userSettings[5].value);
        genotower.config.MONSTER_HEALTH = ($scope.userSettings[6].value);

        $scope.startGame = function () {};
        $scope.buttonText = "Evolution in progress...";
        genotower.run.start();
    };
});
