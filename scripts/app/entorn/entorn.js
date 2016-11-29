angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('entorn', {
                parent: 'site',
                url: '/entorn',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entorn/entorn.html',
                        controller: 'EntornController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('entorn');
                        return $translate.refresh();
                    }]
                }
            });
    });
