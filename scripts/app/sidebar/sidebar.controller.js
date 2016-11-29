angular.module('aventuraApp')
    .controller('SidebarController', function ($scope, $state) {
        'use strict';

        var unselectMenu = function () {
            $(".item-selected").addClass("menu-item").removeClass("item-selected");
            $(".item-selected-pack").addClass("menu-item-pack").removeClass("item-selected-pack");
            $(".item-selected-feina").addClass("menu-item-feina").removeClass("item-selected-feina");
        };

        var selectMenu = function (page, menu) {
            unselectMenu();
            var addClass = "item-selected";
            var removeClass = "menu-item";
            if(menu=="feina" || menu=="pack") {
                addClass = addClass + "-" + menu;
                removeClass = removeClass + "-" + menu;
            }
            $("#"+page+"").addClass( addClass ).removeClass( removeClass );
        };

        $scope.$on('hide_menu', function (event, data) {
            if(data=="sidebar" || data=="all") {
                unselectMenu();
            }
        });
        $scope.$on('show_menu', function (event, data) {
            if(data.page=='paintball' || data.page=='senderisme' || data.page=='bicicletese'
                || data.page=='gimcanabtt' || data.page=='padel' || data.page=='segway'
                || data.page=='escaperoom' || data.page=='laser'
                || data.page=='packbuggies' || data.page=='packdespedida'
                || data.page=='packempresa' || data.page=='packdinar'
                || data.page=='feina' || data.page=='buggies') {
                $scope.$parent.$broadcast('hide_menu', 'top');
                selectMenu(data.page, data.menu);
            }
        });

        $scope.goTo = function (page){
            $state.go(page);
        };
    });
