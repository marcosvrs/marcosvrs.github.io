(function () {
    'use strict';

    angular.module('marcosvrs').factory('randomHeaderService', function () {
        var headers = ['Finding new Knowledge', 'Fast Learner', 'Passion for trying'];
        return headers[Math.floor((Math.random() * headers.length))];
    });
})();