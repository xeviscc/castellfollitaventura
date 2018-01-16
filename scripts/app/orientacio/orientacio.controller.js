angular.module('aventuraApp')
    .controller('OrientacioController', function ($scope,$rootScope,STATIC_URL,$timeout,$state,$translate,PREU_ORIENTACIO) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('orientacio.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu = PREU_ORIENTACIO+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.language = "es";
        if($translate.use()!="en") {
            $scope.language = $translate.use();
        }

    }
);