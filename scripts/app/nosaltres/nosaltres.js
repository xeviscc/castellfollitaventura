angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('nosaltres', {
                parent: 'site',
                url: '/nosaltres',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/nosaltres/nosaltres.html',
                        controller: 'NosaltresController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('nosaltres');
                        return $translate.refresh();
                    }]
                }
            });
    });
