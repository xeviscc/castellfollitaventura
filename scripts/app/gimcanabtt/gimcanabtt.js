angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('gimcanabtt', {
                parent: 'site',
                url: '/gimcanabtt',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/gimcanabtt/gimcanabtt.html',
                        controller: 'GimcanaBttController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('gimcanabtt');
                        return $translate.refresh();
                    }]
                }
            });
    });