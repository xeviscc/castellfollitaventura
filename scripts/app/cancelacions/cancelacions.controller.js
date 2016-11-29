angular.module('aventuraApp')
    .controller('CancelacionsController', function ($scope,$timeout) {
        'use strict';
        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);
    }
);

