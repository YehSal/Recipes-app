'use strict';

/**
 * @ngdoc service
 * @name recipesAppApp.posts
 * @description
 * # posts
 * Service in the recipesAppApp.
 */
angular.module('recipesAppApp')
  .service('posts', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var o = {
        posts: []
    };
    return o; 
  });
