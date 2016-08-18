'use strict';

eventsApp.factory('$exceptionHandler', function($log) {
    return function (exception) {
        $log.warn("Exception handled: ", exception.message);
    };
});