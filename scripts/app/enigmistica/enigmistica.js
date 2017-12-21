angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('enigmistica', {
                parent: 'site',
                url: '/enigmistica',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/enigmistica/enigmistica.html',
                        controller: 'EnigmisticaController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('enigmistica');
                        return $translate.refresh();
                    }]
                }
            });
    });