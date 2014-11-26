'use strict';

describe('Service: UserService', function() {

    beforeEach(module('roommate'));

    var service, $httpBackend, authRequestHandler;
    var userId = 1;

    beforeEach(inject(function(_UserService_, $injector) {
        service = _UserService_;
        $httpBackend = $injector.get('$httpBackend');
        authRequestHandler = $httpBackend.when(
            'GET',
            'http://localhost:8080/RoommateAPI/users/' + userId
        ).respond({
            'id': 1,
            'email': 'test@test.com',
            'password': 'thisisapassword'
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

        it('shouldMakeAGetRequestToTheAPI', function() {
            $httpBackend.expectGET('http://localhost:8080/RoommateAPI/users/' + userId).respond("blah");

            service.fetchUser(userId);

            $httpBackend.flush();
        });
    });
});
