'use strict';

/**
 * @ngdoc function
 * @name recipesAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipesAppApp
 */
angular.module('recipesAppApp')
  .controller('MainCtrl', ['posts', function(posts) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.test = 'Hello world!';
    this.posts = posts.posts;
    this.posts = [
      {title: 'post1', upvotes: 5},
      {title: 'post2', upvotes: 10},
      {title: 'post3', upvotes: 77},
      {title: 'post4', upvotes: 9},
      {title: 'post5', upvotes: 45},
      {title: 'post6', upvotes: 44}
    ];

    this.addPost = function() {
      if(!this.title || this.title == '') {
        return;
      }
      this.posts.push({title: this.title,
        link: this.link,
        upvotes: 0});
      this.title = '';
      this.link = '';
    }

    this.incrementUpvotes = function(post ) {
      post.upvotes = post.upvotes + 1;
    }

  }]);
