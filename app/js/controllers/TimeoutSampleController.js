'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $log, $timeout) {
        /*
        setTimeout(function () {
            $scope.name = "Timeout";
        }, 3000);
        */

        var timeoutPromise = $timeout(function () {
            $scope.name = "Timeout";
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(timeoutPromise);
            $scope.name = "Cancelled";
        };
    }
)