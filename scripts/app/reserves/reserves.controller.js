angular.module('aventuraApp')
    .controller('ReservesController', function ($scope,STATIC_URL,$timeout,$state,$parse) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.data = {
            repeatSelect: null,
            availableOptions: [
                {id: '0', name: '0'},
                {id: '1', name: '1'},
                {id: '2', name: '2'},
                {id: '3', name: '3'},
                {id: '4', name: '4'},
                {id: '5', name: '5'},
                {id: '6', name: '6'},
                {id: '7', name: '7'},
                {id: '8', name: '8'},
                {id: '9', name: '9'},
                {id: '10', name: '10'},
                {id: '11', name: '11'},
                {id: '12', name: '12'},
                {id: '13', name: '13'},
                {id: '14', name: '14'},
                {id: '15', name: '15'},
                {id: '16', name: '16'}
            ]
        };

        $scope.activitatsDisponibles = [
                {id: 'segway', name: 'Segway', active: 'off'},
                {id: 'paintball', name: 'Paintball', active: 'off'},
                {id: 'laser', name: 'Làser Combat', active: 'off'},
                {id: 'escaperoom', name: 'Room Escape', active: 'off'},
                {id: 'senderisme', name: 'Senderisme', active: 'off'},
                {id: 'btte', name: 'BTT Elèctrica', active: 'off'},
                {id: 'gimcanabtt', name: 'Gimcana BTT', active: 'off'}
            ];


        $scope.comanda = null;

        $scope.$watch('comanda', function() {
                $scope.$parent.$broadcast('preu_post_it', calculate()+'€');
            }
        , true);

        $scope.comanda = {
            "pack100" : 0,
            "pack200" : 0,
            "boles100" : 0,
            "boles200" : 0,
            "boles500" : 0,
            "bolesCaixa" : 0
        };

        var calculate = function() {
            var pack100 = ($scope.comanda.pack100)? $scope.comanda.pack100*18 : 0;
            var pack200 = ($scope.comanda.pack200)? $scope.comanda.pack200*23 : 0;
            var boles100 = ($scope.comanda.boles100)? $scope.comanda.boles100*6 : 0;
            var boles200 = ($scope.comanda.boles200)? $scope.comanda.boles200*11 : 0;
            var boles500 = ($scope.comanda.boles500)? $scope.comanda.boles500*25 : 0;
            var bolesCaixa = ($scope.comanda.bolesCaixa)? $scope.comanda.bolesCaixa*80 : 0;
            return pack100 + pack200 + boles100 + boles200 + boles500 + bolesCaixa;
        };

        var activitiesActivated=0;
        $scope.toggleActivitat = function(activitat){
            if(activitat.active=='on') {
                activitat.active='off';
                var aux = $parse("reserves_"+activitat.id);
                aux.assign($scope, false);
                activitiesActivated--;
                checkCapAndtotal();
            } else {
                activitat.active='on';
                var aux = $parse("reserves_"+activitat.id);
                aux.assign($scope, true);
                activitiesActivated++;
                checkCapAndtotal();
            }
        };

        function checkCapAndtotal(){
            if(activitiesActivated>0) {
                $scope.reserves_total = true;
                $scope.reserves_cap = true;
            } else {
                $scope.reserves_total = false;
                $scope.reserves_cap = false;
            }
        }

        $scope.c = {
            "seg" : {
                "two" : {
                    "q" : 0,
                    "price" : 55
                },
                "three" : {
                    "q" : 0,
                    "price" : 65
                },
                "threeplus" : {
                    "q" : 0,
                    "price" : 80
                },
                "day" : {
                    "q" : 0,
                    "price" : 120
                }
            },
            "pb" : {
                "pack100" : {
                    "q" : 0,
                    "price" : 18
                },
                "pack200" : {
                    "q" : 0,
                    "price" : 23
                },
                "boles100" : {
                    "q" : 0,
                    "price" : 6
                },
                "boles200" : {
                    "q" : 0,
                    "price" : 11
                },
                "boles500" : {
                    "q" : 0,
                    "price" : 25
                },
                "bolesCaixa" : {
                    "q" : 0,
                    "price" : 80
                }
            }
    }

    }
);