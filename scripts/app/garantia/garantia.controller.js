angular.module('aventuraApp')
    .controller('GarantiesController', function ($timeout,$rootScope,$translate,$scope) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('garantia.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);
    }
);

