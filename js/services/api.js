angular.module('brew')
    .factory('api', function ($http, $httpParamSerializerJQLike) {
        var timestamp = new Date().getTime();
				var live = true;
				var url = appConfig.API_URL;
				console.log(url)
        if(live) {
	        return {
		    	status: function() {
			    	//return	$http.get('/js/data.json?t=' + timestamp);
			    	return $http.get(url + '/api/getstatus?_=' + timestamp);
			    },
			    updatePID: function(data) {
				    return $http({
					   url: url + '/api/updatepid',
					   method: 'POST',
					   data: $httpParamSerializerJQLike(data),
					   headers: {
						   'Content-Type': 'application/x-www-form-urlencoded'
					   }
				    });
			    },
			    toggleSwitch: function(data) {
				    return $http({
					   url: url + '/api/updateswitch',
					   method: 'POST',
					   data: $httpParamSerializerJQLike(data),
					   headers: {
						   'Content-Type': 'application/x-www-form-urlencoded'
					   }
				    });
			    },
			    toggleTimer: function(data) {
				    return $http({
					   url: url + '/api/toggletimer',
					   method: 'POST',
					   data: $httpParamSerializerJQLike(data),
					   headers: {
						   'Content-Type': 'application/x-www-form-urlencoded'
					   }
				    });				    
			    }
		    }
	    } else {
		    return {
		    	status: function() {
			    	//return	$http.get('/js/data.json?t=' + timestamp);
			    	return $http.get('/js/data.json');
			    }
		    }
	    }
});
