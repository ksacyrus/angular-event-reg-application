'use strict';

eventsApp.controller('EditEventController', 
    function EditEventController($scope, eventData, $log) {
        $scope.saveEvent = function(event) {
            // window.alert(event.name + " is saved!");
            eventData.save(event)
                .$promise
                .then(function (response) {
                    $log.log('Success', response);
                })
                .catch(function (response) {
                    $log.log('Failure', response);
                });
        };

        $scope.cancelEvent = function() {
            window.location = "/EventDetails.html";
        };
    }
);