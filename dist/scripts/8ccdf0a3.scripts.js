angular.module("lorcancoyleorg",[]).config(["$routeProvider",function(o){"use strict";o.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}),o.when("/books",{templateUrl:"views/books.html",controller:"BookCtrl"}),o.otherwise({redirectTo:"/"})}]),angular.module("lorcancoyleorg").controller("MainCtrl",["$scope",function(o){"use strict";o.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("lorcancoyleorg").controller("BookCtrl",["$scope","$http","$log",function(o,t,e){"use strict";t.get("/scripts/books.json").then(function(t){o.books=t.data}),e.info("BookCtrl initialisation completed.")}]);