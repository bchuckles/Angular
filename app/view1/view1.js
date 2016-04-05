'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$interval', function($scope,  $interval) {

  $scope.tickInterval = 1000 //ms
  $scope.time = "loading......";
  $scope.name = "twelve";
  var tick = function () {
    var sampleDate = new Date();
    var hours = sampleDate.getHours();
    var minutes = sampleDate.getMinutes();
    var seconds = sampleDate.getSeconds();

    $scope.$watch('name', function(name) {
        if ("twelve" === name) {
    if (hours > 12) {
        hours = hours - 12;
        $scope.time = "0" + hours + ":" + minutes + ":" + seconds;
    }
}
    });

    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }


    $scope.time = hours + ":" + minutes + ":" + seconds;

      $interval(tick, $scope.tickInterval);
  }

    $interval(tick, $scope.tickInterval);


}]);