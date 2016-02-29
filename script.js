var app = angular.module('catDog', ['ngRoute']);
	app.config(function($routeProvider, $locationProvider, $httpProvider) {
		$routeProvider
			.when('/page1',
				{
					controller: 'routeCtrl',
					templateUrl: 'page1.html'
				})
			.when('/page2',
				{
					controller: 'routeCtrl',
					templateUrl: 'page2.html'
				})
			.when('/page3',
				{
					controller: 'routeCtrl',
					templateUrl: 'page3.html'
				})
			.when('/page4',
				{
					controller: 'routeCtrl',
					templateUrl: 'page4.html'
				})
			.when('/404', {
					controller: 'routeCtrl',
        			templateUrl: '404.html'

      		})
			.otherwise({ redirectTo: '/page1' });
	});

  app.factory('httpErrorResponseInterceptor', ['$q', '$location',
    function($q, $location) {
      return {
        response: function(responseData) {
          return responseData;
        },
        responseError: function error(response) {
          switch (response.status) {
            case 404:
              $location.path('/404');
              break;
            default:
              $location.path('/404');
          }

          return $q.reject(response);
        }
      };
    }
  ]);

    //Http Intercpetor to check auth failures for xhr requests
  app.config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('httpErrorResponseInterceptor');
    }
  ]);


app.controller('routeCtrl', function(){
  
});