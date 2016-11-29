angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('contacte', {
                parent: 'site',
                url: '/contacte',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/contacte/contacte.html',
                        controller: 'ContacteController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('contacte');
                        return $translate.refresh();
                    }]
                }
            });
    });
