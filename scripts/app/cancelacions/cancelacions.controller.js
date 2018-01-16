angular.module('aventuraApp')
    .controller('CancelacionsController', function ($scope,$rootScope,$translate,$timeout) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('cancelacions.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);
    }
);

