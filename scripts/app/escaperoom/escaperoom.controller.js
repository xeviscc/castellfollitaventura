angular.module('aventuraApp')
    .controller('EscaperoomController', function ($scope,$timeout,$state,PREU_ROOM_2_3,PREU_ROOM_4,PREU_ROOM_5_6) {
        'use strict';

        $scope.preu_2_3 = PREU_ROOM_2_3+"€";
        $scope.preu_4 = PREU_ROOM_4+"€";
        $scope.preu_5_6 = PREU_ROOM_5_6+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu_5_6);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);