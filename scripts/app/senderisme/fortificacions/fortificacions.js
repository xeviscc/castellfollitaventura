angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('fortificacions', {
                parent: 'senderisme',
                url: '/fortificacions',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/senderisme/fortificacions/fortificacions.html',
                        controller: 'FortificacionsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('senderisme');
                        $translatePartialLoader.addPart('fortificacions');
                        return $translate.refresh();
                    }]
                }
            });
    });
