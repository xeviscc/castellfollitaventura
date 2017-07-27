angular.module('aventuraApp')
    .controller('PackamidaController', function ($scope,STATIC_URL,$timeout,$state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '+8€');
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