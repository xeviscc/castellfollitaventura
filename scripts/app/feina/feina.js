angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('feina', {
                parent: 'site',
                url: '/feina',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/feina/feina.html',
                        controller: 'FeinaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('feina');
                        return $translate.refresh();
                    }]
                }
            });
    });
