angular.module('aventuraApp')
    .controller('ContacteController', function($scope,$rootScope,$translate,$state,MailService,$timeout) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('contacte.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.enviat = false;
        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'top'});
        }, 100);
        $scope.$parent.$broadcast('show_collaboradors', true);

        $scope.sendMail = function () {
            var callback = function (data, status, headers, config) {
                $scope.enviat = true;
            };
            $scope.contacte.page = $state.current.name;
            MailService.sendMail($scope.contacte, callback);
        };
    }
);
