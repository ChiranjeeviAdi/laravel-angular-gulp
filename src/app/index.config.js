(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

       
    }

})();