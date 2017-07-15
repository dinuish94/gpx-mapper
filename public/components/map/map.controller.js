angular.module('ngMap').controller('mapctrl', ['$scope', 'geoLocationservice', function mapCtrl($scope, geoLocationservice) {
    let vm = this;

    let get = () => {
        geoLocationservice.get().then(response => {
            $scope.origin = response.origin;
            $scope.destination = response.destination;
            $scope.wayPoints = response.waypoints;
        })
    }
    get();

}]);