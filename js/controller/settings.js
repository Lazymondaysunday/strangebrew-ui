angular.module('brew')
	.controller('settings', function($scope, api, $interval) {
	
	$scope.formData = {};
	$scope.updatePID = function() {
		api.status().then(function(data) {
			$scope.data = data.data;
		});
	}
	$scope.updatePID();
	
	$scope.fixSpace = function(text) {
		return decodeURIComponent(text);
	}
	
});