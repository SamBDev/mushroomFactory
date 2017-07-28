"user strict";

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