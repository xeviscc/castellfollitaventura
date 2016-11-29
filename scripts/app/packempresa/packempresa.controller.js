angular.module('aventuraApp')
    .controller('PackempresaController', function ($scope,STATIC_URL,$timeout,$state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '53€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'pack'});
        }, 100);

        $scope.fotos = [
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol1_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol1_200.jpg", title: "cabirol foto 1", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol2_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol2_200.jpg", title: "cabirol foto 2", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol3_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol3_200.jpg", title: "cabirol foto 3", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol4_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol4_200.jpg", title: "cabirol foto 4", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol5_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol5_200.jpg", title: "cabirol foto 5", alt: "cabirol" },
            { gran: STATIC_URL+"images/segway/segway1_800.jpg", petita: STATIC_URL+"images/segway/segway1_200.jpg", title: "Seagwey foto 1", alt: "segway_1" },
            { gran: STATIC_URL+"images/segway/segway2_800.jpg", petita: STATIC_URL+"images/segway/segway2_200.jpg", title: "Seagwey foto 2", alt: "segway_2" },
            { gran: STATIC_URL+"images/segway/segway3_800.jpg", petita: STATIC_URL+"images/segway/segway3_200.jpg", title: "Seagwey foto 3", alt: "segway_3" },
            { gran: STATIC_URL+"images/paintball/paintball2_800.jpg", petita: STATIC_URL+"images/paintball/paintball2_200.jpg", title: "Paintball foto 2", alt: "paintball_2" },
            { gran: STATIC_URL+"images/paintball/paintball1_800.jpg", petita: STATIC_URL+"images/paintball/paintball1_200.jpg", title: "Paintball foto 1", alt: "paintball_1" },
            { gran: STATIC_URL+"images/paintball/paintball4_800.jpg", petita: STATIC_URL+"images/paintball/paintball4_200.jpg", title: "Paintball foto 4", alt: "paintball_4" },
            { gran: STATIC_URL+"images/paintball/paintball3_800.jpg", petita: STATIC_URL+"images/paintball/paintball3_200.jpg", title: "Paintball foto 3", alt: "paintball_3" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions1_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions1_200.jpg", title: "Castell des de la carretera", alt: "Castell des de la carretera" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions2_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions2_200.jpg", title: "Castell des de la zona esportiva", alt: "Castell des de la zona esportiva" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions4_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions4_200.jpg", title: "Sant Pere de Magrà", alt: "Sant Pere de Magrà" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions3_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions3_200.jpg", title: "Castell des de darrere", alt: "Castell des de darrere" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions5_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions5_200.jpg", title: "Sant Pere de Magrà", alt: "Sant Pere de Magrà" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions6_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions6_200.jpg", title: "Torre del Ballester", alt: "Torre del Ballester" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions7_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions7_200.jpg", title: "Torres", alt: "Torres" },
            { gran: STATIC_URL+"images/rutes/fortificacions/fortificacions8_800.jpg", petita: STATIC_URL+"images/rutes/fortificacions/fortificacions8_200.jpg", title: "Vistes del poble", alt: "Vistes del poble" }
        ];
    }
);