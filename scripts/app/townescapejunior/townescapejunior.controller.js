angular.module('aventuraApp')
    .controller('TownEscapeJuniorController', function ($scope,$timeout,$state,PREU_TOWN_JUNIOR_8_12,PREU_TOWN_JUNIOR_12_16,PREU_TOWN_JUNIOR_MES_16) {
        'use strict';

        $scope.preu_8_12 = PREU_TOWN_JUNIOR_8_12+"€";
        $scope.preu_12_16 = PREU_TOWN_JUNIOR_12_16+"€";
        $scope.preu_mes_16 = PREU_TOWN_JUNIOR_MES_16+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu_mes_16);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);