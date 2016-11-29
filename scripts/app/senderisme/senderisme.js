angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('senderisme', {
                parent: 'site',
                url: '/senderisme',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/senderisme/senderisme.html',
                        controller: 'SenderismeController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('senderisme');
                        return $translate.refresh();
                    }]
                }
            });
    });
