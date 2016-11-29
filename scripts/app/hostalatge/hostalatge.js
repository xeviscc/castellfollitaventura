angular.module('aventuraApp')
    .config(function ($stateProvider) {
        'use strict';
        $stateProvider
            .state('hostalatge', {
                parent: 'site',
                url: '/hostalatge',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/hostalatge/hostalatge.html',
                        controller: 'HostalatgeController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        //$translatePartialLoader.addPart('list');
                        return $translate.refresh();
                    }]
                }
            });
    });
