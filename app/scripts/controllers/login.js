'use strict';

angular.module('mddtestSiteApp')
.controller('LoginCtrl', ['$scope', '$rootScope',function ($scope, $rootScope) {
	//clicks
	$scope.attemptLogin = function(){
		$rootScope.loginObj.$locin('facebook');
	};
}]);
