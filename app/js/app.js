'use strict';


// Declare app level module which depends on filters, and services
angular.module('aEmmetStory', ['aEmmetStory.filters', 'aEmmetStory.services', 'aEmmetStory.directives', 'aEmmetStory.controllers', 'ui.codemirror', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'welcomeCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/start-your-story', {templateUrl: 'partials/start-your-story.html', controller: 'startYourStoryCtrl'});
    $routeProvider.when('/temp', {templateUrl: 'partials/temp.html', controller: 'tempCtrl'});

    $routeProvider.otherwise({redirectTo: '/temp'});
  }]);
