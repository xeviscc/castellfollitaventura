angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('avis', {
                parent: 'site',
                url: '/avis',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/avis/avis.html',
                        controller: 'AvisController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('avis');
                        return $translate.refresh();
                    }]
                }
            });
    });
