angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('packallotjament', {
                parent: 'site',
                url: '/packallotjament',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/packallotjament/packallotjament.html',
                        controller: 'PackallotjamentController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('packallotjament');
                        return $translate.refresh();
                    }]
                }
            });
    });
