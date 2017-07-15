const app = angular.module('ngMap').run(function ($rootScope) {
  $rootScope.logLatLng = function (e) {
    console.log('loc', e.latLng);
  }
});