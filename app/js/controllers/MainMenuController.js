'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, $log) {
        $log.log('absUrl: ', $location.absUrl());
        $log.log('protocol: ', $location.protocol());
        $log.log('port: ', $location.port());
        $log.log('host: ', $location.host());
        $log.log('path: ', $location.path());
        $log.log('search: ', $location.search());
        $log.log('hash: ', $location.hash());
        $log.log('url: ', $location.url());

        $scope.createEvent = function() {
            $location.replace();
            $location.url('/newEvent');
        };
    });