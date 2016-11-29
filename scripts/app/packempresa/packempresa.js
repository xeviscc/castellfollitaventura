angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packempresa', {
                parent: 'site',
                url: '/packempresa',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packempresa/packempresa.html',
                        controller: 'PackempresaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packempresa');
                        return $translate.refresh();
                    }]
                }
            });
    });
