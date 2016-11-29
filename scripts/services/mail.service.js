angular.module('aventuraApp')
	.factory('MailService',function($http, $log) {
		'use strict';

		var baseURI = 'api/mail';

		return {
			sendMail : function(formulari, callback) {
				return $http.post(baseURI, angular.toJson(formulari))
					.success(function(data, status, headers, config) {
						callback(data, status, headers, config);
					}).error(function(data, status, headers, config) {
						$log.error("MailService.sendMail error. Data: " + data + ", status: " + status + ", headers: " + headers + ", config: " + config);
						callback(data, status, headers, config);
					});
			}
		};
	});