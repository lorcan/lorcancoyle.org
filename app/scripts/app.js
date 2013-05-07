angular.module('lorcancoyleorg', []).config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl'
    });

    $routeProvider.when('/books', {
      templateUrl : 'views/books.html',
      controller : 'BookCtrl'
    });
    $routeProvider.otherwise({
      redirectTo : '/'
    });
  });
