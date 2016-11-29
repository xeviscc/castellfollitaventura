angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('com_arribar', {
                parent: 'site',
                url: '/com_arribar',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/com_arribar/com_arribar.html',
                        controller: 'ComArribarController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('com_arribar');
                        return $translate.refresh();
                    }]
                }
            });
    });
