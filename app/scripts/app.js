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
		$stateProvider.state('manage', {
				url: '/manage',
				templateUrl: 'views/manage.html'
		})
		$stateProvider.state('admin', {
				url: '/admin',
				templateUrl: 'views/admin.html'
		})
		$stateProvider.state('words', {
				url: '/words',
				templateUrl: 'views/words.html'
		})
		$urlRouterProvider.otherwise('/admin')
}])