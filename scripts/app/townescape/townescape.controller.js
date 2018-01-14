angular.module('aventuraApp')
    .controller('TownescapeController', function ($scope,$timeout,$state,PREU_TOWN_8_12,PREU_TOWN_12_16,PREU_TOWN_MES_16) {
        'use strict';

        $scope.preu_8_12 = PREU_TOWN_8_12+"€";
        $scope.preu_12_16 = PREU_TOWN_12_16+"€";
        $scope.preu_mes_16 = PREU_TOWN_MES_16+"€";
        $scope.preu = PREU_TOWN_12_16+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);