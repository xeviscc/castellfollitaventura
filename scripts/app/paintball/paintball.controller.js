angular.module('aventuraApp')
    .controller('PaintballController', function ($scope,STATIC_URL,$timeout,$state,$translate) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '18€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.language = "es";
        if($translate.use()!="en") {
            $scope.language = $translate.use();
        }

        $scope.fotos = [
            { gran: STATIC_URL+"images/paintball/amics1_800.jpg", petita: STATIC_URL+"images/paintball/amics1_200.jpg", title: "Amics foto 1", alt: "amics_1" },
            { gran: STATIC_URL+"images/paintball/amics2_800.jpg", petita: STATIC_URL+"images/paintball/amics2_200.jpg", title: "Amics foto 2", alt: "amics_2" },
            { gran: STATIC_URL+"images/paintball/amics3_800.jpg", petita: STATIC_URL+"images/paintball/amics3_200.jpg", title: "Amics foto 3", alt: "amics_3" },
            { gran: STATIC_URL+"images/paintball/amics4_800.jpg", petita: STATIC_URL+"images/paintball/amics4_200.jpg", title: "Amics foto 4", alt: "amics_4" },
            { gran: STATIC_URL+"images/paintball/paintball2_800.jpg", petita: STATIC_URL+"images/paintball/paintball2_200.jpg", title: "Paintball foto 2", alt: "paintball_2" },
            { gran: STATIC_URL+"images/paintball/paintball1_800.jpg", petita: STATIC_URL+"images/paintball/paintball1_200.jpg", title: "Paintball foto 1", alt: "paintball_1" },
            { gran: STATIC_URL+"images/paintball/paintball4_800.jpg", petita: STATIC_URL+"images/paintball/paintball4_200.jpg", title: "Paintball foto 4", alt: "paintball_4" },
            { gran: STATIC_URL+"images/paintball/paintball3_800.jpg", petita: STATIC_URL+"images/paintball/paintball3_200.jpg", title: "Paintball foto 3", alt: "paintball_3" }

        ];
    }
);