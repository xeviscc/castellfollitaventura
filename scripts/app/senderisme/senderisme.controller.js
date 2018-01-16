angular.module('aventuraApp')
    .controller('SenderismeController', function ($scope,$rootScope,$translate,$timeout,$state,PREU_SENDERISME) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('senderisme.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.preu = PREU_SENDERISME+"€";

        // firing an event downwards with timeout in order to have the listener already loaded.
        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);
    }
);