'use strict';

angular.module('recipesAppApp')
  .controller('PostsCtrl',
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.post = posts.posts[$stateParams.id];

      $scope.addComment = function() {
        if($scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
    });
