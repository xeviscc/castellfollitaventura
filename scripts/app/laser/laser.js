angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('laser', {
                parent: 'site',
                url: '/laser',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/laser/laser.html',
                        controller: 'LaserController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('laser');
                        return $translate.refresh();
                    }]
                }
            });
    });