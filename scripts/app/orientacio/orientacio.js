angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('orientacio', {
                parent: 'site',
                url: '/orientacio',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/orientacio/orientacio.html',
                        controller: 'OrientacioController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('orientacio');
                        return $translate.refresh();
                    }]
                }
            });
    });