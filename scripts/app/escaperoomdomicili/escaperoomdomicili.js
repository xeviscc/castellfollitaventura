angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('escaperoomdomicili', {
                parent: 'site',
                url: '/escaperoomdomicili',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/escaperoomdomicili/escaperoomdomicili.html',
                        controller: 'EscaperoomdomiciliController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('escaperoomdomicili');
                        return $translate.refresh();
                    }]
                }
            });
    });