angular.module('aventuraApp')
    .controller('AvisController', function ($timeout,$scope,$rootScope,$translate) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('avis.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);
    }
);

