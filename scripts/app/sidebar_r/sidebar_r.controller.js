angular.module('aventuraApp')
    .controller('SidebarRController', function ($scope, $state, MailService,STATIC_URL) {
        'use strict';

        $scope.enviat = false;
        $scope.$on('preu_post_it', function (event, data) {
            $scope.preu = data;
            if(data.length>3){
                $(".gota-mobil").find("h2").css("right","75px");
            }
        });

        $scope.$on('show_collaboradors', function (event, data) {
            if(data) {
                $(".sidebar-right").hide();
                $(".colaboradors-right").show();
                //$(".content-sidebar-right").css("padding-top", 0);
            } else {
                $(".sidebar-right").show();
                $(".colaboradors-right").hide();
                //$(".content-sidebar-right").css("padding-top", 40);
            }
        });

        $scope.formulari = null;

        $scope.sendMail = function () {
            var callback = function (data, status, headers, config) {
                $scope.formulari = null;
                $scope.enviat = true;
            };
            $scope.formulari.page = $state.current.name;
            $scope.formulari.preu = $scope.preu;
            MailService.sendMail($scope.formulari, callback);
        };

        $scope.goTo = function (page){
            $state.go(page);
        };

        if (screen.width <= 640) { //mobil
            $scope.srcBarCanPep = STATIC_URL+'assets/img/colaboradors/barcanpep_60.jpg';
        } else { //pc
            $scope.srcBarCanPep = STATIC_URL+'assets/img/colaboradors/barcanpep_120.jpg';
        }
    });
