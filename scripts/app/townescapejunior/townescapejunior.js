angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('townescapejunior', {
                parent: 'site',
                url: '/townescapejunior',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/townescapejunior/townescapejunior.html',
                        controller: 'TownEscapeJuniorController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('townescapejunior');
                        return $translate.refresh();
                    }]
                }
            });
    });