'use strict'

angular.module('lorcancoyleorg', [])
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider
      .when '/', 
      	templateUrl: 'views/main.html'
      .when '/books', 
         templateUrl: 'views/books.html'
         controller: 'BookCtrl'
      .otherwise
      	redirectTo: '/'
  ]
