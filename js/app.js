var app = angular.module('brew', [ 'ui.router', 'ngSanitize', 'ui.bootstrap', 'timer', 'onScreenKeyboard', 'angular-duration-format']);


app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/dashboard');
	$stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            resolve: {},
            controller: 'main'
        })
        .state('settings', {
	    	url: '/settings',
	    	templateUrl: 'templates/settings.html',
	    	controller: 'settings' 
        })
        .state('settings.system', {
	        url: '/system',
	        templateUrl: 'templates/settings/system.html?v=2'
        })
        .state('settings.probes', {
	        url: '/probes',
	        templateUrl: 'templates/settings/probes.html'
        })
        .state('settings.switches', {
	        url: '/switches',
	        templateUrl: 'templates/settings/switches.html'
        })
        .state('settings.timers',{
	        url: '/timers',
	        templateUrl: 'templates/settings/timers.html'
        });
	
});
