'use strict'

angular.module('lorcancoyle.orgApp', [])
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider
      .when '/', 
      	templateUrl: 'views/main.html'
      	controller: 'MainCtrl'
      .when '/books', 
         templateUrl: 'views/books.html'
         controller: 'BookCtrl'
      .otherwise
      	redirectTo: '/'
  ]
