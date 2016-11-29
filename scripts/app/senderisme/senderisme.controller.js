angular.module('aventuraApp')
    .controller('SenderismeController', function ($scope, $timeout,$state) {
        'use strict';

        // firing an event downwards with timeout in order to have the listener already loaded.
        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '18€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);