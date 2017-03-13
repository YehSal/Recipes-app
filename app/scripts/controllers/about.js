'use strict';

/**
 * @ngdoc function
 * @name recipesAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the recipesAppApp
 */
angular.module('recipesAppApp')
  .controller('AboutCtrl',
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
