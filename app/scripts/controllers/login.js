'use strict';

angular.module('mddtestSiteApp')
.controller('LoginCtrl', ['$scope', '$rootScope','$location','checklogin',function ($scope, $rootScope, $location, checklogin) {
	//clicks
	$scope.attemptLogin = function(){
		$rootScope.loginObj.$login('facebook');
		var user = $rootScope.loginObj.user.username;

		var x = checklogin.setUser(user);
		console.log(x);

	};
}]);
