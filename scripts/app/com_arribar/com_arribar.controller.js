angular.module('aventuraApp')
    .controller('ComArribarController', function ($scope,$rootScope,$translate,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('com_arribar.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $scope.$parent.$broadcast('show_collaboradors', true);
        $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': 'top'});

        $scope.showMap = function() {
            $("#staticmap").hide();
            $("#map").html(
                "<iframe style=\"border: 0;\" " +
                "src=\"https:\/\/www.google.com\/maps\/embed\/v1\/directions" +
                "?origin="+$scope.fromCity+" " +
                "&amp;destination=Castellfollit+Aventura" +
                "&amp;key=AIzaSyCrG2RnB8xMIT6B1FZa5WHAclVLWfdjwwY\" " +
                "height=\"400\" " +
                "width=\"100%\"" +
                "frameborder=\"0\" " +
                "allowfullscreen=\"allowfullscreen\"><\/iframe>"
            );
        };
    }
);
