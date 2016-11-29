angular.module('aventuraApp')
	.factory('PagamentService',function($http, $log) {
		'use strict';

		var baseURI = 'api/pagament';

		return {
			pagamentSegur : function(formulari, callback) {
				return $http.post(baseURI, angular.toJson(formulari))
					.success(function(data, status, headers, config) {
						callback(data, status, headers, config);
					}).error(function(data, status, headers, config) {
						$log.error("PagamentService.pagamentSegur error. Data: " + data + ", status: " + status + ", headers: " + headers + ", config: " + config);
						callback(data, status, headers, config);
					});
			}
		};
	});