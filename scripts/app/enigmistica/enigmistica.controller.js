angular.module('aventuraApp')
    .controller('EnigmisticaController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,$state,PREU_ENIGMISTICA) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('enigmistica.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu = PREU_ENIGMISTICA+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);