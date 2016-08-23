eventsApp.factory('eventData', function($http, $resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function (eventId) {
            // return $http({method: 'GET', url: '/data/event/1'});
            return resource.get({id:eventId});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});