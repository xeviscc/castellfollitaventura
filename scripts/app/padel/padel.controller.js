angular.module('aventuraApp')
    .controller('PadelController', function ($scope,$timeout,$state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '35€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

    }
);