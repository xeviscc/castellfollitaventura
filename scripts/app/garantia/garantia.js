angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('garantia', {
                parent: 'site',
                url: '/garantia',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/garantia/garantia.html',
                        controller: 'GarantiaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('garantia');
                        return $translate.refresh();
                    }]
                }
            });
    });
