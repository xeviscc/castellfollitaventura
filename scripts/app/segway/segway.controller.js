angular.module('aventuraApp')
	.controller('SegwayController', function($scope,STATIC_URL,PagamentService,$timeout,$state) {
		'use strict';

		$timeout(function() {
			$scope.$parent.$broadcast('preu_post_it', '55€');
			$scope.$parent.$broadcast('show_collaboradors', false);
			$scope.$parent.$broadcast('show_menu', { 'page': $state.current.name, 'menu': ''});
		}, 100);

		$scope.fotos = [
			{
				gran: STATIC_URL+"images/segway/segway1_800.jpg",
				petita: STATIC_URL+"images/segway/segway1_200.jpg",
				itle: "Seagwey foto 1", alt: "segway_1"
			},
			{
				gran: STATIC_URL+"images/segway/segway2_800.jpg",
				petita: STATIC_URL+"images/segway/segway2_200.jpg",
				title: "Seagwey foto 2", alt: "segway_2"
			},
			{
				gran: STATIC_URL+"images/segway/segway3_800.jpg",
				petita: STATIC_URL+"images/segway/segway3_200.jpg",
				itle: "Seagwey foto 3", alt: "segway_3"
			}
		];

		$scope.sendMail = function () {
			var callback = function (data, status, headers, config) {
				$scope.enviat = true;
			};
			$scope.pagament.amount = "55";
			PagamentService.pagamentSegur($scope.pagament, callback);
		};
	});

