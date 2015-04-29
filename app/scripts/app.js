'use strict';

/**
 * @ngdoc overview
 * @name lunchUlleviApp
 * @description
 * # lunchUlleviApp
 *
 * Main module of the application.
 */
angular
  .module('lunchUlleviApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // Mine
    'ullevigatanMenu'
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
