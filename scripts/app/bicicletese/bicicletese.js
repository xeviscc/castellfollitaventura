angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('bicicletese', {
                parent: 'site',
                url: '/bicicletese',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/bicicletese/bicicletese.html',
                        controller: 'BicicleteseController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('bicicletese');
                        return $translate.refresh();
                    }]
                }
            });
    });