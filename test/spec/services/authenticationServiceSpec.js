'use strict';

describe('Service: AuthenticationService', function() {

	beforeEach(module('roommate'));

	var service, $httpBackend, authRequestHandler;
	var formData = {email : 'test@test.com', password: 'password'};

	beforeEach(inject(function(_AuthenticationService_, $injector) {
		service = _AuthenticationService_;
		$httpBackend = $injector.get('$httpBackend');
		authRequestHandler = $httpBackend.when(
			'POST', 
			'http://localhost:8080/RoommateAPI/tokens', 
			{email:'test@test.com', password:'password'}, 
			{'ContentType': 'application/json'}
		).respond({
			'id': 0,
			'userId': 0,
			'token': '4e52db58-81af-4d58-8fa9-30f7f6c49e0a',
			'expirationDate': '2014-10-04T10:04:39.56'
		});

	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('shouldExist', function() {
		expect(service).toBeDefined();
	});

	describe('http', function() {

		it('shouldMakeAPostRequestToTheAPI', function() {
			$httpBackend.expectPOST('http://localhost:8080/RoommateAPI/tokens').respond("blah");
			
			service.login(formData);

			$httpBackend.flush();
		});
	});
});
