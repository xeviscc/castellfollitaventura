angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('landing', {
                parent: 'site',
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/landing/landing.html',
                        controller: 'LandingController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('landing');
                        return $translate.refresh();
                    }]
                }
            });
    });
