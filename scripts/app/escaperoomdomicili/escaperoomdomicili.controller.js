angular.module('aventuraApp')
    .controller('EscaperoomdomiciliController', function ($scope,$timeout,$state,PREU_ROOM_DOMICILI) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '    ');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);