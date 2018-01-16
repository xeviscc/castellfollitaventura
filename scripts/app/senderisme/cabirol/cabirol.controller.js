angular.module('aventuraApp')
    .controller('CabirolController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,PREU_SENDERISME) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('cabirol.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu = PREU_SENDERISME+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
        }, 100);

        $scope.fotos = [
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol1_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol1_200.jpg", title: "cabirol foto 1", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol2_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol2_200.jpg", title: "cabirol foto 2", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol3_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol3_200.jpg", title: "cabirol foto 3", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol4_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol4_200.jpg", title: "cabirol foto 4", alt: "cabirol" },
            { gran: STATIC_URL+"images/rutes/cabirol/cabirol5_800.jpg", petita: STATIC_URL+"images/rutes/cabirol/cabirol5_200.jpg", title: "cabirol foto 5", alt: "cabirol" }
        ];

    }
);