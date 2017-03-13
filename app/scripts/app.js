'use strict';

/**
 * @ngdoc overview
 * @name recipesAppApp
 * @description
 * # recipesAppApp
 *
 * Main module of the application.
 */
angular
  .module('recipesAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url:'/home',
          templateUrl:'views/main.html',
          controller:'MainCtrl'
        })
        .state('posts', {
          url:'/posts/{id}',
          templateUrl: 'views/posts.html',
          controller: 'PostsCtrl'
        });

      $urlRouterProvider.otherwise('home');
  }]);
