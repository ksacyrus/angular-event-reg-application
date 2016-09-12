'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route) {
        
        $log.log($route.current.foo);
        $log.log($route.current.params.foo1); //localhost:8000/#/event/1?foo1=myBar
        $log.log($route.current.params.eventId);
        $log.log($route.current.pathParams.eventId);

        $scope.sortorder = '-upVoteCount';
        $scope.event = $route.current.locals.event;        
        /*
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function (event) {
                    $scope.event = event;
                    $log.log(event);
            })
            .catch(function (response) {
                    $log.warn(response);
            });
        */
        /*
        eventData.getEvent()
            .success(function(event) {
                $scope.event = event;
            })
            .error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        */

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };

        $scope.reload = function() {
            $route.reload();
        };


        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled = true;
    }
);