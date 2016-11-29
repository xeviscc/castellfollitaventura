angular.module('aventuraApp')
    .controller('NosaltresController', function ($scope,$state,$timeout) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'top'});
        }, 100);

    }
);