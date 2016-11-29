angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('paintball', {
                parent: 'site',
                url: '/paintball',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/paintball/paintball.html',
                        controller: 'PaintballController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('paintball');
                        return $translate.refresh();
                    }]
                }
            });
    });