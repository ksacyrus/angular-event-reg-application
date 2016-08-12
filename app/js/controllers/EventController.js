'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = '-upVoteCount';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: Date.now(),
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced1',
                    abstract: 'This endpoint is not terribly useful for Visma Employee and will not be used by the app, but is implemented to facilitate testing and verification. The mobile app will use the endpoint that is filtered (see below).',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Create a cost request. It is currently unknown whether IDs are assigned client or serverside (i.e. by CRA). The specifics of the resource submitted must be discussed and cross referenced with CRA requirements, which are currently unkown.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'This page is used to do technical design of the Cost Request feature in the Visma Employee Mobile app. Please see Cost Request Asset Home for information about Cost Request Asset (CRA) itself.',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);