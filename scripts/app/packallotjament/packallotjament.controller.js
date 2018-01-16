angular.module('aventuraApp')
    .controller('PackallotjamentController', function ($scope,$rootScope,$translate,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('packallotjament.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '200€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'pack'});
        }, 100);

    }
);