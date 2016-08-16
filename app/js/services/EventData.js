eventsApp.factory('eventData', function($http, $resource) {
    var resourse = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function () {
            // return $http({method: 'GET', url: '/data/event/1'});
            return resourse.get({id:1});
        },
        save: function(event) {
            event.id = 999;
            return resourse.save(event);
        }
    };
});