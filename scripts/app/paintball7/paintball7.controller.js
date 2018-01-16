angular.module('aventuraApp')
    .controller('Paintball7Controller', function ($scope,$rootScope,STATIC_URL,$timeout,$state,$translate,PREU_50,PREU_BOLES_50) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('paintball7.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu_50 = PREU_50+"€";
        $scope.preu_boles_50 = PREU_BOLES_50+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu_50);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.language = "es";
        if($translate.use()!="en") {
            $scope.language = $translate.use();
        }
/*
        $scope.fotos = [
            { gran: STATIC_URL+"images/paintball7/amics1_800.jpg", petita: STATIC_URL+"images/paintball7/amics1_200.jpg", title: "Amics foto 1", alt: "amics_1" },
            { gran: STATIC_URL+"images/paintball7/amics2_800.jpg", petita: STATIC_URL+"images/paintball7/amics2_200.jpg", title: "Amics foto 2", alt: "amics_2" },
            { gran: STATIC_URL+"images/paintball7/amics3_800.jpg", petita: STATIC_URL+"images/paintball7/amics3_200.jpg", title: "Amics foto 3", alt: "amics_3" },
            { gran: STATIC_URL+"images/paintball7/amics4_800.jpg", petita: STATIC_URL+"images/paintball7/amics4_200.jpg", title: "Amics foto 4", alt: "amics_4" },
            { gran: STATIC_URL+"images/paintball7/paintball2_800.jpg", petita: STATIC_URL+"images/paintball7/paintball2_200.jpg", title: "Paintball foto 2", alt: "paintball_2" },
            { gran: STATIC_URL+"images/paintball7/paintball1_800.jpg", petita: STATIC_URL+"images/paintball7/paintball1_200.jpg", title: "Paintball foto 1", alt: "paintball_1" },
            { gran: STATIC_URL+"images/paintball7/paintball4_800.jpg", petita: STATIC_URL+"images/paintball7/paintball4_200.jpg", title: "Paintball foto 4", alt: "paintball_4" },
            { gran: STATIC_URL+"images/paintball7/paintball3_800.jpg", petita: STATIC_URL+"images/paintball7/paintball3_200.jpg", title: "Paintball foto 3", alt: "paintball_3" }

        ];
        */
    }
);