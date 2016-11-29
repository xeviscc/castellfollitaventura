angular.module('aventuraApp')
    .controller('MenuController', function ($scope, $state,STATIC_URL) {
        'use strict';

        var unselectMenu = function () {
            $(".top-item-selected").addClass("top-menu-item").removeClass("top-item-selected");
        };

        var selectMenu = function (page) {
            unselectMenu();
            $("#"+page+"").addClass("top-item-selected").removeClass("top-menu-item");
        };

        $scope.$on('hide_menu', function (event, data) {
            if(data=='top' || data=='all') {
                unselectMenu();
            }
        });
        $scope.$on('show_menu', function (event, data) {
            if(data.page=='entorn' || data.page=='nosaltres' || data.page=='com_arribar'
                || data.page=='contacte' || data.page=='reserves') {
                $scope.$parent.$broadcast('hide_menu', 'sidebar');
                selectMenu(data.page);
            }
        });

        $scope.goTo = function (page){
            $state.go(page);
        };
        $scope.goToShop = function(){
            window.location='http://esportscastell.com';
        };

        $scope.images = [
            {
                src: STATIC_URL+'images/promo/benelli.jpg',
                title: 'Pic 1',
                width: '80%',
                height: '80%',
                href: 'http://esportscastell.com'
            },
            {
                src: STATIC_URL+'images/promo/lion.jpg',
                title: 'Pic 2',
                width: '80%',
                height: '80%',
                href: 'http://esportscastell.com'
            },
            {
                src: STATIC_URL+'images/promo/pilotes.jpg',
                title: 'Pic 3',
                width: '80%',
                height: '80%',
                href: 'http://esportscastell.com'
            }
        ];
    }
);
