'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse, $log) {
        var fn = $parse('1 + 2');
        $log.log(fn());

        var getter = $parse('localEvent.name');
        var context1 = {localEvent: {name: 'Local event today', place: ' Here'}};
        var context2 = {localEvent: {name: 'Local event tomorrow', place: ' There'}};

        $log.log(getter(context1), getter(context2));
        $log.log(getter(context1, context2));

        var setter = getter.assign;
        setter(context2, 'New local event');

        $log.log(context2);
        
        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
)