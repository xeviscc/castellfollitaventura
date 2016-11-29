angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('cabirol', {
                parent: 'senderisme',
                url: '/cabirol',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/senderisme/cabirol/cabirol.html',
                        controller: 'CabirolController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('senderisme');
                        $translatePartialLoader.addPart('cabirol');
                        return $translate.refresh();
                    }]
                }
            });
    });
