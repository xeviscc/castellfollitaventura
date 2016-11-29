angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('btt', {
                parent: 'site',
                url: '/btt',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/btt/btt.html',
                        controller: 'BttController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('btt');
                        return $translate.refresh();
                    }]
                }
            });
    });
