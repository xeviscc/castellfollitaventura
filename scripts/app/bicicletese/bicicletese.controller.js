angular.module('aventuraApp')
    .controller('BicicleteseController', function ($scope,STATIC_URL,$timeout,$state,PREU_BICICCLETES_E) {
        'use strict';

        $scope.preu = PREU_BICICCLETES_E+"€";

        $timeout(function() {
            $scope.$parent.$broadcast('preu_post_it', $scope.preu);
            $scope.$parent.$broadcast('show_collaboradors', false);
            $scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
        }, 100);

        $scope.fotos = [
            {
                gran: STATIC_URL+"images/btt-electrica/btt-electrica_800.jpg",
                petita: STATIC_URL+"images/btt-electrica/btt-electrica_200.jpg",
                title: "Btt-e foto 1", alt: "btt_1"
            },
            {
                gran: STATIC_URL+"images/btt-electrica/btt-electrica1_800.jpg",
                petita: STATIC_URL+"images/btt-electrica/btt-electrica1_200.jpg",
                title: "Btt-e foto 2", alt: "btt_2"
            },
            {
                gran: STATIC_URL+"images/btt-electrica/btt-electrica2_800.jpg",
                petita: STATIC_URL+"images/btt-electrica/btt-electrica2_200.jpg",
                title: "Btt-e foto 3", alt: "btt_3"
            },
            {
                gran: STATIC_URL+"images/btt-electrica/btt-electrica3_800.jpg",
                petita: STATIC_URL+"images/btt-electrica/btt-electrica3_200.jpg",
                title: "Btt-e foto 3", alt: "btt_3"
            }
        ];
/*
        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
            //you also get the actual event object
            //do stuff, execute functions -- whatever...
            $('a.btte-group').colorbox({rel:'group1', maxWidth: '95%', maxHeight: '95%'});
        });
        */
    });
