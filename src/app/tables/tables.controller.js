(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('TablesController', TablesController1);

    /** @ngInject */
    function TablesController1($log) {
    	$log.info('TABLES1');
    }
})();