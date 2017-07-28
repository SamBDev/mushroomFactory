"use strict";

const myApp = angular.module("app", []);

myApp.controller('MushroomHandler', function($scope, MushroomFactory){
    MushroomFactory.getMushrooms()
        .then((data)=>{
            let mushArr = [];
            Object.keys(data).forEach((key)=>{
                mushArr.push(data[key]);
            });
            $scope.mushroomData = mushArr;
            console.log("mushroom data", $scope.mushroomData);
            $scope.mushroomSearch = "";
            $scope.test = "test";
    });
});