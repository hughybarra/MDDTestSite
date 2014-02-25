'use strict';

angular.module('mddtestSiteApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'firebase',
  'ngTouch'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
