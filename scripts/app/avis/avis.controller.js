angular.module('aventuraApp')
    .controller('AvisController', function ($timeout, $scope) {
        'use strict';
        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);
    }
);

