angular.module('aventuraApp')
    .controller('PackbuggiesController', function ($scope,$rootScope,$translate,STATIC_URL,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('packbuggies.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '150€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'pack'});
        }, 100);
    }
);