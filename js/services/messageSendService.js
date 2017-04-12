(function () {
    'use strict';

    angular.module('marcosvrs').factory('messageSendService', function (data, $http) {
        return $http.post('/message', data);
    });
})();