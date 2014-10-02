'use strict';

angular.module('roommate')
	.controller('LoginController', function($scope, AuthenticationService){
		$scope.submit = function(){
			AuthenticationService.login($scope.formData);	

		};
});
