'use strict';

/**
 * @ngdoc function
 * @name recipesAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipesAppApp
 */
angular.module('recipesAppApp')
  .controller('MainCtrl', function() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.test = 'Hello world!';
    this.posts = [
      {title: 'post1', upvotes: 5},
      {title: 'post2', upvotes: 10},
      {title: 'post3', upvotes: 77},
      {title: 'post4', upvotes: 9},
      {title: 'post5', upvotes: 45},
      {title: 'post6', upvotes: 44}
    ];
  });
