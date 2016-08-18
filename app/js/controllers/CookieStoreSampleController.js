'use strict';

eventsApp.controller('CookieStoreSampleController', function CookieStoreSampleController($scope, $cookieStore, $log) {
    $scope.localEvent = {
        id: 1,
        name: "First event"
    };

    $scope.saveEventToCookie = function (event) {
        $cookieStore.put('event', event);
    };

    $scope.getEventFromCookie = function () {
        $log.log($cookieStore.get('event'));
    };

    $scope.removeEventCookie = function () {
        $cookieStore.remove('event');
    };
})