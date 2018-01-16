angular.module('aventuraApp')
    .controller('EscaperoomdomiciliController', function ($scope,$rootScope,$translate,$timeout,$state,PREU_ROOM_DOMICILI) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('escaperoomdocmicili.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '    ');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);