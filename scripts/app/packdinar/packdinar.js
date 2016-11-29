angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packdinar', {
                parent: 'site',
                url: '/packdinar',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packdinar/packdinar.html',
                        controller: 'PackdinarController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packdinar');
                        return $translate.refresh();
                    }]
                }
            });
    });
