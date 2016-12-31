'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('AboutCtrl', function () {
    console.log('about');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
