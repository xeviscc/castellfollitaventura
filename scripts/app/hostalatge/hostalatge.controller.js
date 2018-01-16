angular.module('aventuraApp')
    .controller('HostalatgeController', function ($timeout,$rootScope,$translate,$scope,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('hostalatge.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '150€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);


    }
);