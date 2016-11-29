angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('padel', {
                parent: 'site',
                url: '/padel',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/padel/padel.html',
                        controller: 'PadelController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('padel');
                        return $translate.refresh();
                    }]
                }
            });
    });
