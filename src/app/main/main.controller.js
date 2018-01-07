(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log,$http,$rootScope) {
    	$log.info('hhg');
    	var main = this;
    	main.loadContents=function(){
    		$http({
		        method: "POST",
                url: $rootScope.SITE_URL+'loadContents',
		        data: $.param({'name':'aaa'}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	      	}).success(function (data,status) {
	          if(status===200){
	          	main.usersdetails =data;
	            main.users = data;
	          }
	      	}).error(function(data,status) {
	          if(status===403){
	          }
	      	});
    	};
    	main.loadContents();
    }
})();