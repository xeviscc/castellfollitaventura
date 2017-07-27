angular.module('aventuraApp')
    .controller('BuggiesController', function ($scope,STATIC_URL,$timeout,$state,PREU_BUGGIES) {
        'use strict';

        $scope.preu = PREU_BUGGIES+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);