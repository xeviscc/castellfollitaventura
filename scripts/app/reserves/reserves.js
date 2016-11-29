angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('reserves', {
                parent: 'site',
                url: '/reserves',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/reserves/reserves.html',
                        controller: 'ReservesController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('reserves');
                        $translatePartialLoader.addPart('segway');
                        $translatePartialLoader.addPart('paintball');
                        $translatePartialLoader.addPart('contacte');
                        return $translate.refresh();
                    }]
                }
            });
    });