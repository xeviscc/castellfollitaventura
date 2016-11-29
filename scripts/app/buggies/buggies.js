angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('buggies', {
                parent: 'site',
                url: '/buggies',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/buggies/buggies.html',
                        controller: 'BuggiesController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('buggies');
                        return $translate.refresh();
                    }]
                }
            });
    });