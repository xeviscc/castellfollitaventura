angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('paintball7', {
                parent: 'site',
                url: '/paintball7',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/paintball7/paintball7.html',
                        controller: 'Paintball7Controller'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('paintball7');
                        return $translate.refresh();
                    }]
                }
            });
    });