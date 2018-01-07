(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log) {
    	$log.info('hhdash');
    }
})();