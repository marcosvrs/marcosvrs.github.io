(function () {
    'use strict';

    angular.module('marcosvrs').controller('AppController', function ($scope, $rootScope, filterFilter, preloaderService, $element, $state, randomHeaderService) {
        var vm = this;
        vm.text = randomHeaderService;
        vm.isNavCollapsed = true;

        vm.imageLocations = ['img/code.jpg', 'img/phone.jpg', 'img/tablet.jpg'];
        preloaderService.preloadImages(vm.imageLocations);

        vm.backward = function () {
            vm.backwardState = filterFilter($state, { 'order': $state.current.order - 1 });
            if (vm.backwardState) {
                $state.go(vm.backwardState.name);
            } else {
                $state.go(filterFilter($state, { 'order': $state.lenght }));
            }
        }

        vm.forward = function () {
            vm.forwardState = filterFilter($state, { 'order': $state.current.order + 1 });
            if (vm.forwardState) {
                $state.go(vm.forwardState.name);
            } else {
                $state.go(filterFilter($state, { 'order': 1 }));
            }
        }

        vm.stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
            if (fromState.name) {
                if (toState.order > fromState.order) {
                    $element.removeClass('backward').addClass('forward');
                } else {
                    $element.removeClass('forward').addClass('backward');
                }
            }
        });
    });
})();