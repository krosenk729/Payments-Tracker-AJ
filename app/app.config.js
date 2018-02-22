angular.module('paymentTrackerApp')
.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
    	$locationProvider.hashPrefix('!');

    	$routeProvider
    	.when('/payments/:uid', {
    		template: '<payment-tracker></payment-tracker>'
    	})
    	.when('/loggedout',{
    		template: '<user-login></user-login>'
    	})
    	.otherwise('/loggedout')
    }]);