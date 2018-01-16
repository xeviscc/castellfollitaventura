angular.module('aventuraApp')
    .controller('FortificacionsController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,PREU_SENDERISME) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('fortificacions.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu = PREU_SENDERISME+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
        }, 100);

        $scope.fotos = [
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