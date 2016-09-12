'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {
            foo: 'bar',
            templateUrl: 'templates/EventDetails.html',
            //template: '<h1>Hello, Im a dynamic template</h1>',
            controller: 'EventController',
            resolve: {
                event: function($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });

/*
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    });
*/