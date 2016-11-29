angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('escaperoom', {
                parent: 'site',
                url: '/escaperoom',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/escaperoom/escaperoom.html',
                        controller: 'EscaperoomController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('escaperoom');
                        return $translate.refresh();
                    }]
                }
            });
    });