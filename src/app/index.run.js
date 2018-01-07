(function() {
    'use strict';


    angular
        .module('angularSeedApp')
        .run(runBlock)
        .controller('DropdownController', DropdownController)
    	  .controller('TranslateController', TranslateController)
        .factory('authHttpResponseInterceptor',function($q,$location, $rootScope){
            return {
                response: function(response){
                    $rootScope.offline = false;
                    if (response.status === 401) {
                           $location.path('/main');
                       
                    }
                    return response || $q.when(response);
                },
                responseError: function(rejection) {
                    if (rejection.status === 401) {
                           $location.path('/main');
                        
                    }
                    return $q.reject(rejection);
                }
            };
      })
      .config(function($httpProvider) {
          //Http Intercpetor to check auth failures for xhr requests
          $httpProvider.interceptors.push('authHttpResponseInterceptor');
      }).config(function(socialProvider){
        socialProvider.setGoogleKey("Your Goolg Client ID");
        //socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
        //socialProvider.setFbKey({appId: "YOUR FACEBOOK APP ID", apiVersion: "API VERSION"});
      });
    /** @ngInject */
    function runBlock($log,$rootScope) {

        $log.debug('runBlock end');
        $rootScope.BASE_URL='http://localhost/laraangulargulp/';
        $rootScope.SITE_URL=$rootScope.BASE_URL+'index.php/';
        $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
          $log.info('ggg');
          $log.info(userDetails);
        });
    }

    function TranslateController($translate) {
	    var vm = this;
	    vm.changeLanguage = function (langKey) {
	        $translate.use(langKey);
	        vm.language = langKey;
	    };
	}

  function DropdownController() {
    var vm = this;

    vm.isCollapsed = true;
    vm.status = {
      isopen: false
    };
  }

})();