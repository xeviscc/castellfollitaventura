angular.module('aventuraApp')
    .controller('PackdespedidaController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('packdesedida.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '105€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'pack'});
        }, 100);

        $scope.fotos = [
            {
                gran: STATIC_URL+"images/segway/segway1_800.jpg",
                petita: STATIC_URL+"images/segway/segway1_200.jpg",
                title: "Seagwey foto 1", alt: "segway_1"
            },
            {
                gran: STATIC_URL+"images/segway/segway2_800.jpg",
                petita: STATIC_URL+"images/segway/segway2_200.jpg",
                title: "Seagwey foto 2", alt: "segway_2"
            },
            {
                gran: STATIC_URL+"images/segway/segway3_800.jpg",
                petita: STATIC_URL+"images/segway/segway3_200.jpg",
                title: "Seagwey foto 3", alt: "segway_3"
            },
            {
                gran: STATIC_URL+"images/paintball/paintball2_800.jpg",
                petita: STATIC_URL+"images/paintball/paintball2_200.jpg",
                title: "Paintball foto 2", alt: "paintball_2"
            },
            {
                gran: STATIC_URL+"images/paintball/paintball1_800.jpg",
                petita: STATIC_URL+"images/paintball/paintball1_200.jpg",
                title: "Paintball foto 1", alt: "paintball_1"
            },
            {
                gran: STATIC_URL+"images/paintball/paintball4_800.jpg",
                petita: STATIC_URL+"images/paintball/paintball4_200.jpg",
                title: "Paintball foto 4", alt: "paintball_4"
            },
            {
                gran: STATIC_URL+"images/paintball/paintball3_800.jpg",
                petita: STATIC_URL+"images/paintball/paintball3_200.jpg",
                title: "Paintball foto 3", alt: "paintball_3"
            }
        ];

    }
);