angular.module('aventuraApp')
    .controller('BttController', function ($scope,$timeout,$state) {
        'use strict';
        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '15€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

    }
);