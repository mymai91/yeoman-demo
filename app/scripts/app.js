'use strict';

/**
 * @ngdoc overview
 * @name myNewProjectApp
 * @description
 * # myNewProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myNewProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function (
    $stateProvider,
    $urlRouterProvider
  ) {
      $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: 'views/main.html',
          controller:'MainCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        });
      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise('/main');

      // Config Restangular
      RestangularProvider.setBaseUrl('/api/');
  })
  .run(function () {
    console.log('run');
  });
