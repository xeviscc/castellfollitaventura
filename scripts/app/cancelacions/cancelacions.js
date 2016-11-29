angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('cancelacions', {
                parent: 'site',
                url: '/cancelacions',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/cancelacions/cancelacions.html',
                        controller: 'CancelacionsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('cancelacions');
                        return $translate.refresh();
                    }]
                }
            });
    });
