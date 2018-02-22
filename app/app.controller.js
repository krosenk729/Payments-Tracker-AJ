angular.module('paymentTrackerApp')
.controller('PaymentManager', function PaymentManagerController($scope) {
	$scope.isLoggedIn = true;
	$scope.user = {};
	$scope.freqoptions = ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
	$scope.ampmoptions = ['AM', 'PM'];
});