'use strict';

/**
 * @ngdoc function
 * @name recipesAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipesAppApp
 */
angular.module('recipesAppApp')
  .controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = 'Hello world!';
    $scope.posts = posts.posts;
    $scope.posts = [
      {title: 'post1', upvotes: 5},
      {title: 'post2', upvotes: 10},
      {title: 'post3', upvotes: 77},
      {title: 'post4', upvotes: 9},
      {title: 'post5', upvotes: 45},
      {title: 'post6', upvotes: 44}
    ];

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments:[
              {author: 'James', body: 'Cool post!', upvotes: 0},
              {author: 'Franco', body: 'Meh post :(', upvotes: 2}
          ]
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes = post.upvotes + 1;
    };

  }]);
