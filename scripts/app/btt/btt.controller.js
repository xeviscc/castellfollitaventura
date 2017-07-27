angular.module('aventuraApp')
    .controller('BttController', function ($scope,$timeout,$state,PREU_BICICCLETES) {
        'use strict';

        $scope.preu = PREU_BICICCLETES+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

    }
);