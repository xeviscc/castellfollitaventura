angular.module('aventuraApp')
    .controller('PadelController', function ($scope,$rootScope,$translate,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('padel.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '35€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

    }
);