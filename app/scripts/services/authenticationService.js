'use strict';

angular.module('roommate')
	.service('AuthenticationService', function($http){
		this.login = function(formData) {
		       	return $http({
				method: 'POST',
				url: 'http://localhost:8080/RoommateAPI/tokens',
				data: formData,
				headers: {'ContentType' : 'application/json'}
			});
		};
	});
