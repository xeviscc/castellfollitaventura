angular.module('aventuraApp')
    .controller('NosaltresController', function ($scope,$rootScope,$translate,$state,$timeout) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('nosaltres.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'top'});
        }, 100);

    }
);