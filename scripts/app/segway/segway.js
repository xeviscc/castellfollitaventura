angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('segway', {
                parent: 'site',
                url: '/segway',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/segway/segway.html',
                        controller: 'SegwayController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('segway');
                        return $translate.refresh();
                    }]
                }
            });
    });
