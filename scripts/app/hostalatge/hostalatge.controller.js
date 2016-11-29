angular.module('aventuraApp')
    .controller('HostalatgeController', function ($timeout,$scope,$state) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '150€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);


    }
);