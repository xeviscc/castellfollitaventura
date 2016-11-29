angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packbuggies', {
                parent: 'site',
                url: '/packbuggies',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packbuggies/packbuggies.html',
                        controller: 'PackbuggiesController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packbuggies');
                        return $translate.refresh();
                    }]
                }
            });
    });