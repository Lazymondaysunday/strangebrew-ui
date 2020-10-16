angular.module('brew')
    .filter('formatTemperature', [
      function() {
        return function(input, scale, label) {
          var value = parseFloat(input).toFixed(2),
              convertedValue;

          if (scale === 'F') {
           // convertedValue = Math.round(value, 4);
           convertedValue = value;
            
          } else if (scale === 'C') {
            convertedValue = Math.round(value, 2);
          } else {
            throw new Error('Not a valid scale');
          }

          return label ? convertedValue += '\u00B0' : convertedValue;
        };
      }
    ])
    
    .filter('formatTimer', function () {
		return function (duration) {
		    var milliseconds = parseInt((duration%1000)/100)
		        , seconds = parseInt((duration/1000)%60)
		        , minutes = parseInt((duration/(1000*60))%60)
		        , hours = parseInt((duration/(1000*60*60))%24);
		
		    hours = (hours < 10) ? "0" + hours : hours;
		    minutes = (minutes < 10) ? "0" + minutes : minutes;
		    seconds = (seconds < 10) ? "0" + seconds : seconds;
		
		    return hours + ":" + minutes + ":" + seconds;
 		}
 	});