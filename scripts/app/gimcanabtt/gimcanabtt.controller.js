angular.module('aventuraApp')
    .controller('GimcanaBttController', function ($scope,STATIC_URL,$timeout,$state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '35€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.fotos = [
            {
                gran: STATIC_URL+"images/gimcana/gimcana1_800.jpg",
                petita: STATIC_URL+"images/gimcana/gimcana1_200.jpg",
                title: "Vistes des de Torre del Ballester", alt: "Vistes des de Torre del Ballester"
            },
            {
                gran: STATIC_URL+"images/gimcana/gimcana2_800.jpg",
                petita: STATIC_URL+"images/gimcana/gimcana2_200.jpg",
                title: "Vistes a Sant Pere de Magrà", alt: "Vistes a Sant Pere de Magrà"
            },
            {
                gran: STATIC_URL+"images/gimcana/gimcana3_800.jpg",
                petita: STATIC_URL+"images/gimcana/gimcana3_200.jpg",
                title: "Font del Coure", alt: "Font del Coure"
            },
            {
                gran: STATIC_URL+"images/gimcana/gimcana4_800.jpg",
                petita: STATIC_URL+"images/gimcana/gimcana4_200.jpg",
                title: "Sant Pere de Magrà", alt: "Sant Pere de Magrà"
            }
        ];
    }
);