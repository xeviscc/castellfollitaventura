angular.module('aventuraApp')
    .controller('FeinaController', function($scope,$rootScope,$translate,$state,MailService) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('feina.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.enviat = false;
        $scope.$parent.$broadcast('show_collaboradors', true);
        $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'feina'});

        $scope.sendMail = function () {
            var callback = function (data, status, headers, config) {
                $scope.enviat = true;
            };
            $scope.feina.page = $state.current.name;
            MailService.sendMail($scope.feina, callback);
        };
    }
);
