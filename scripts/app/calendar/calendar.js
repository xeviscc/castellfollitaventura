angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('calendar', {
                parent: 'site',
                url: '/calendar',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/calendar/calendar.html',
                        controller: 'CalendarController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        //$translatePartialLoader.addPart('profile');
                        return $translate.refresh();
                    }]
                }
            });
    });