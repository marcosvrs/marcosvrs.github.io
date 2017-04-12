(function () {
    'use strict';

    angular.module('marcosvrs').controller('ContactController', function ($scope, $window /*, messageSendService*/) {
        var vm = this;

        vm.submit = function () {
            $window.location.href = 'mailto:marcosauda%40outlook.com?subject=Contact%20by%20Website&body=' + encodeURIComponent(vm.message);
            //messageSendService.success(function(data){});
            vm.name = null;
            vm.email = null;
            vm.message = null;
            //vm.contactForm.$setPristine();
        }

        vm.createMessage = function () {
            if (vm.contactForm.contactMessage.$untouched) {
                vm.message = 'Hey Marcos!\nI just came to say hello!\n\nSincerely,\n' + (angular.isUndefined(vm.name) ? '' : vm.name) + '\n' + (angular.isUndefined(vm.email) ? '' : vm.email);
            }
        }
    });
})();