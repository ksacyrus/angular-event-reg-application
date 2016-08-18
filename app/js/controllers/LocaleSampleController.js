'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $log, $locale) {
        $log.log($locale);
        
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        throw { message: "Manual exception" };
    }
)