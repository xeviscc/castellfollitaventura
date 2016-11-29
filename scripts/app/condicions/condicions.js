angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('condicions', {
                parent: 'site',
                url: '/condicions',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/condicions/condicions.html',
                        controller: 'CondicionsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('condicions');
                        return $translate.refresh();
                    }]
                }
            });
    });
