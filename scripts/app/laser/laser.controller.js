angular.module('aventuraApp')
    .controller('LaserController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('laser.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '10€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);


        $scope.fotos = [
            { gran: STATIC_URL+"images/laser/laser1_800.jpg", petita: STATIC_URL+"images/laser/laser1_200.jpg", title: "Làser foto 1", alt: "laser_1" },
            { gran: STATIC_URL+"images/laser/laser2_800.jpg", petita: STATIC_URL+"images/laser/laser2_200.jpg", title: "Làser foto 2", alt: "laser_2" }

        ];

    }
);