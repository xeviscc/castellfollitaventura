angular.module('aventuraApp')
    .controller('CalendarController', function ($scope,$rootScope,$translate,$timeout,$state) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('calendar.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', '30€');
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.horesDia = [
            { hora: "00:00", ocupat: false, part: "matinada"},
            { hora: "00:30", ocupat: false, part: "matinada"},
            { hora: "01:00", ocupat: false, part: "matinada"},
            { hora: "01:30", ocupat: false, part: "matinada"},
            { hora: "02:00", ocupat: false, part: "matinada"},
            { hora: "02:30", ocupat: false, part: "matinada"},
            { hora: "03:00", ocupat: false, part: "matinada"},
            { hora: "03:30", ocupat: false, part: "matinada"},
            { hora: "04:00", ocupat: false, part: "matinada"},
            { hora: "04:30", ocupat: false, part: "matinada"},
            { hora: "05:00", ocupat: false, part: "matinada"},
            { hora: "05:30", ocupat: false, part: "matinada"},
            { hora: "06:00", ocupat: false, part: "mati"},
            { hora: "06:30", ocupat: false, part: "mati"},
            { hora: "07:00", ocupat: false, part: "mati"},
            { hora: "07:30", ocupat: false, part: "mati"},
            { hora: "08:00", ocupat: false, part: "mati"},
            { hora: "08:30", ocupat: false, part: "mati"},
            { hora: "09:00", ocupat: false, part: "mati"},
            { hora: "09:30", ocupat: false, part: "mati"},
            { hora: "10:00", ocupat: false, part: "mati"},
            { hora: "10:30", ocupat: false, part: "mati"},
            { hora: "11:00", ocupat: false, part: "mati"},
            { hora: "11:30", ocupat: false, part: "mati"},
            { hora: "12:00", ocupat: false, part: "migdia"},
            { hora: "12:30", ocupat: false, part: "migdia"},
            { hora: "13:00", ocupat: false, part: "migdia"},
            { hora: "13:30", ocupat: false, part: "migdia"},
            { hora: "14:00", ocupat: false, part: "migdia"},
            { hora: "14:30", ocupat: false, part: "migdia"},
            { hora: "15:00", ocupat: false, part: "tarda"},
            { hora: "15:30", ocupat: false, part: "tarda"},
            { hora: "16:00", ocupat: false, part: "tarda"},
            { hora: "16:30", ocupat: false, part: "tarda"},
            { hora: "17:00", ocupat: false, part: "tarda"},
            { hora: "17:30", ocupat: false, part: "tarda"},
            { hora: "18:00", ocupat: false, part: "tarda"},
            { hora: "18:30", ocupat: false, part: "tarda"},
            { hora: "19:00", ocupat: false, part: "vespre"},
            { hora: "19:30", ocupat: false, part: "vespre"},
            { hora: "20:00", ocupat: false, part: "vespre"},
            { hora: "20:30", ocupat: false, part: "vespre"},
            { hora: "21:00", ocupat: false, part: "nit"},
            { hora: "21:30", ocupat: false, part: "nit"},
            { hora: "22:00", ocupat: false, part: "nit"},
            { hora: "22:30", ocupat: false, part: "nit"},
            { hora: "23:00", ocupat: false, part: "nit"},
            { hora: "23:30", ocupat: false, part: "nit"}
        ];
        $scope.avui = [];
        $scope.dema = [];
        angular.copy($scope.horesDia, $scope.avui);
        angular.copy($scope.horesDia, $scope.dema);
        var calendari = [
            {
                dia : 123,
                hores : [
                    {
                        hora: "10:00"
                    },
                    {
                        hora: "12:00"
                    },
                    {
                        hora: "13:00"
                    },
                    {
                        hora: "15:00"
                    }
                ]
            },
            {
                dia : 124,
                hores : [
                    {
                        hora: "10:00"
                    },
                    {
                        hora: "10:30"
                    },
                    {
                        hora: "12:00"
                    },
                    {
                        hora: "12:30"
                    },
                    {
                        hora: "13:00"
                    },
                    {
                        hora: "13:00"
                    },
                    {
                        hora: "15:00"
                    }
                ]
            }

        ];

        //Bucle per tot el dia d'avui
        for (var i = 0; i < $scope.avui.length; i++) {
            //Bucle hores reservades primer dia
            for (var j = 0; j < calendari[0].hores.length; j++) {
                if ($scope.avui[i].hora == calendari[0].hores[j].hora){
                    $scope.avui[i].ocupat = true;
                }
            }
        }
        //Bucle per tot el dia de dema
        for (var i = 0; i < $scope.dema.length; i++) {
            //Bucle hores reservades segon dia
            for (var j = 0; j < calendari[1].hores.length; j++) {
                if ($scope.dema[i].hora == calendari[1].hores[j].hora){
                    $scope.dema[i].ocupat = true;
                }
            }
        }
        $scope.showMatinada=true;
        $scope.matinada = function(){
            if($scope.showMatinada){
                $(".matinada").hide();
                $scope.showMatinada=false;
            } else {
                $(".matinada").show();
                $scope.showMatinada=true;
            }


        }













        var self = this;

        self.events = [
            {"dia": "2015-06-01", "hora" : "06:00", "reservat": true},
            {"dia": "2015-06-01", "hora" : "06:00", "reservat": true},
            {"dia": "2015-06-01", "hora" : "06:00", "reservat": false},
            {"dia": "2015-06-01", "hora" : "06:00", "reservat": true}
        ];

        $scope.$watchCollection('[from, to]', function() {
            //console.log($scope.from);
            //console.log($scope.to);
        });

        $scope.selecciona = function(wd, t) {
            console.log(wd);
            console.log(t);
        }

    });
