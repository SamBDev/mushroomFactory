"use strict";

const myApp = angular.module("app", []);

myApp.factory('MushroomFactory', function($q, $http) {
    let getMushrooms = ()=>{
        return $q(function(resolve, reject){
            $http.get("https://fir-101-baf2e.firebaseio.com/mushrooms.json")
            .then(function(response){
                resolve(response.data);
            });
        });
    };
    return {getMushrooms};
});

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