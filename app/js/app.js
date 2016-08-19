'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
        {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        })
    });

/*
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    });
*/