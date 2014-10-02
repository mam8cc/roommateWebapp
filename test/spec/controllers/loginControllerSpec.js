'use strict';

describe('Controller: LoginController', function() {

	beforeEach(function() {
		module('roommate');
	});

	var scope, controller, authService;

	beforeEach(inject(function($rootScope, $controller, AuthenticationService) {
		authService = AuthenticationService;	
		scope = $rootScope.$new();
		scope.formData = {username: 'test@test.com', password : 'password'};

		controller = $controller('LoginController', {
			$scope : scope,
			AuthenticationService : authService
		});
	}));

	it('shouldExist', function() {
		expect(controller).toBeDefined();
	});

	it('shouldHaveASubmitMethodOnTheScope', function() {
		expect(scope.submit).toBeDefined();
	});

	describe('submit', function() {
		it('shouldCallLoginOnTheAuthenticationServiceWithFormData', function() {
			spyOn(authService, 'login');

			scope.submit();

			expect(authService.login).toHaveBeenCalledWith({username : 'test@test.com', password : 'password'});
		});
	});
});
	
