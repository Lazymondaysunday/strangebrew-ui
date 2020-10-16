angular.module('brew')
	.controller('main', function($scope, api, $interval, $uibModal) {

	$scope.formData = {};
	$scope.timerRun = 1;
	var updateInterval = 10;
	$scope.updatePID = function() {
		api.status().then(function(data) {
			$scope.data = data.data;
		});
	}
	$scope.updatePID();
	$interval($scope.updatePID, 1000);

	$scope.fixSpace = function(text) {
		return decodeURIComponent(text);
	}
	/*$scope.toggleTimer = function (){
		if(!$scope.timerRun) {
			setTimeout(function() {
			$scope.$broadcast('timer-start');
			$scope.timerRun = 1;
		}, 1000);
		} else {
			setTimeout(function() {
			$scope.$broadcast('timer-stop');
			$scope.timerRun = 0;
		}, 1000);
		}
	}*/

	$scope.update = function() {
		angular.forEach($scope.formData, function(value, key) {
			var data = value;
			data['inputunit'] = key;
			api.updatePID(data).then(function(resp, err) {

			});
			delete $scope.formData[key];
		});
	}
	$scope.toggle = function(id) {
		var data = {};
		data['toggle'] = id;
		api.toggleSwitch(data).then(function(data){

		});
	}
	$scope.toggleTimer = function(id, mode) {
		var data = {};
		data[mode] = id;
		console.log(data);
		// To Start and Pause you send
		// toggle: id
		// To Reset
		// reset: id
		api.toggleTimer(data).then(function(data) {
			
		});
	}

	$scope.deviceID = '';
	$scope.modeChange = function(mode, device) {
		$scope.modalMode = mode;
		$scope.deviceID = device.deviceaddr;
		$scope.modalName = device.name;
		$scope.modalInstance = $uibModal.open({
		  templateUrl: 'templates/modal/mode.html',
		  scope: $scope 			
		});
		$scope.modalInstance.result.then(function() {
			
		}, function() {
			$scope.formData[$scope.deviceID] = '';
		})		
	}
	$scope.dismissModal = function(deviceID) {
		$scope.formData[deviceID] = '';
		$scope.modalInstance.dismiss();
	}

});
