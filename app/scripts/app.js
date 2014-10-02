'use strict';

/**
 * @ngdoc overview
 * @name roommate
 * @description
 * # roommateWebappApp
 *
 * Main module of the application.
 */
angular
  .module('roommate', [
    'ngRoute' 
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
