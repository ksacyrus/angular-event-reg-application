'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route) {
        
        $scope.sortorder = '-upVoteCount';
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function (event) {
                    $scope.event = event;
                    $log.log(event);
            })
            .catch(function (response) {
                    $log.warn(response);
            });
        
        $log.log($route.current.foo);
        $log.log($route.current.params.foo1); //localhost:8000/#/event/1?foo1=myBar
        $log.log($route.current.params.eventId);
        /*eventData.getEvent()
            .success(function(event) {
                $scope.event = event;
            })
            .error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });*/

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        }


        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled = true;
    }
);