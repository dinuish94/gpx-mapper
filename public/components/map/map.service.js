angular.module('ngMap').factory('geoLocationservice',['$http',function($http){
    return {
            get: () => $http.get('/routes').then(response => response.data)
    };
}]);