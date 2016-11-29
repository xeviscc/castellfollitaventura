angular.module('aventuraApp')
    .controller('EntornController', function ($scope, STATIC_URL, $timeout, $state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'top'});
        }, 100);

        $scope.fotos0 = [
            {
                gran: STATIC_URL+"images/entorn/entorn4_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn4_200.jpg",
                title: "Porxades de la plaça", alt: "Porxades de la plaça"
            },
            {
                gran: STATIC_URL+"images/entorn/entorn3_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn3_200.jpg",
                title: "Plaça Major amb l'Església", alt: "Plaça Major amb l'Església"
            }
        ];

        $scope.fotos = [
            {
                gran: STATIC_URL+"images/entorn/entorn7_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn7_200.jpg",
                title: "Priorat de Santa Maria", alt: "Priorat de Santa Maria"
            },
            {
                gran: STATIC_URL+"images/entorn/entorn1_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn1_200.jpg",
                title: "Carrer del Raval", alt: "Carrer del Raval"
            },
            {
                gran: STATIC_URL+"images/entorn/entorn2_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn2_200.jpg",
                title: "Parc infantil", alt: "Parc infantil"
            },
            {
                gran: STATIC_URL+"images/entorn/entorn5_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn5_200.jpg",
                title: "Escultures", alt: "Escultures"
            },
            {
                gran: STATIC_URL+"images/entorn/entorn6_800.jpg",
                petita: STATIC_URL+"images/entorn/entorn6_200.jpg",
                title: "Escultures", alt: "Escultures"
            }
        ];
    }
);