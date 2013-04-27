angular.module('lorcancoyle.orgApp').controller('BookCtrl', function($scope, $http, $log) {
   'use strict';

   $http.get('/scripts/books.json').then(function(res) {
      $scope.books = res.data;
   });

   $log.info('BookCtrl initialisation completed.');
});
