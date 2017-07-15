angular.module('ngMap').factory('geoLocationservice',['$http',function($http){
    return {
            get: () => $http.get('/geoLocations').then(response => response.data)
    };
}]);