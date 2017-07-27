angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packamida', {
                parent: 'site',
                url: '/packamida',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packamida/packamida.html',
                        controller: 'PackamidaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packamida');
                        return $translate.refresh();
                    }]
                }
            });
    });
