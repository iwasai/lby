'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular.module('appApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('list', {
				url: '/list',
				templateUrl: 'views/list.html'
			})
		$urlRouterProvider.otherwise('/home')
	}])