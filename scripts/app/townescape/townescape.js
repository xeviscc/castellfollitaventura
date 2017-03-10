angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('townescape', {
                parent: 'site',
                url: '/townescape',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/townescape/townescape.html',
                        controller: 'TownescapeController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('townescape');
                        return $translate.refresh();
                    }]
                }
            });
    });