angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packdespedida', {
                parent: 'site',
                url: '/packdespedida',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packdespedida/packdespedida.html',
                        controller: 'PackdespedidaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packdespedida');
                        return $translate.refresh();
                    }]
                }
            });
    });
