'use strict';

angular.module('roommate')
    .service('UserService', function($http){
        this.fetchUser = function(userId) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/RoommateAPI/users/' + userId
            });
        };
    });
