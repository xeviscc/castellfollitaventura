angular.module('aventuraApp')
    .controller('PackdinarController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,$state,PREU_DINAR_DIARI,PREU_DINAR_FESTIU,PREU_ESMORZAR_DIARI,PREU_ESMORZAR_FESTIU) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('packdinar.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu_dinar_diari = PREU_DINAR_DIARI+"€";
        $scope.preu_dinar_festiu = PREU_DINAR_FESTIU+"€";
        $scope.preu_esmorzar_diari = PREU_ESMORZAR_DIARI+"€";
        $scope.preu_esmorzar_festiu = PREU_ESMORZAR_FESTIU+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '+'+$scope.preu_esmorzar_festiu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'pack'});
        }, 100);

        $scope.dinar = [
            {
                gran: STATIC_URL+"images/dinar/carn_olla_800.jpg",
                petita: STATIC_URL+"images/dinar/carn_olla_200.jpg",
                title: "Dinar 1", alt: "dinar_1"
            },
            {
                gran: STATIC_URL+"images/dinar/peus_de_porc_800.jpg",
                petita: STATIC_URL+"images/dinar/peus_de_porc_200.jpg",
                title: "Dinar 2", alt: "dinar_2"
            }
        ];

        $scope.esmorzar = [
            {
                gran: STATIC_URL+"images/dinar/botifarra_amb_seques_800.jpg",
                petita: STATIC_URL+"images/dinar/botifarra_amb_seques_200.jpg",
                title: "Esmorzar 1", alt: "esmorzar_1"
            },
            {
                gran: STATIC_URL+"images/dinar/pa_amb_tomaquet_800.jpg",
                petita: STATIC_URL+"images/dinar/pa_amb_tomaquet_200.jpg",
                title: "Esmorzar 2", alt: "esmorzar_2"
            }
        ];
    }
);