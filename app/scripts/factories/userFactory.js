'use strict';

angular.module('roommate')
    .factory('UserService', function(AuthenticationService, UserService) {
        var user = {};
        user.login = function(formData) {
            //TODO: Refactor this to explicitly pass the username and password
            var token = AuthenticationService.login(formData);
            user = UserService.fetchUser(token.userId);
            
            return user;
        };
    });
