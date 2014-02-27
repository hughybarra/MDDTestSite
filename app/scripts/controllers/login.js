'use strict';

angular.module('mddtestSiteApp')
.controller('LoginCtrl', ['$scope', '$rootScope','$location','checklogin',function ($scope, $rootScope, $location, checklogin) {
	//clicks
	$scope.attemptLogin = function(){

		$rootScope.loginObj.$login('facebook').then(function(){

			var user = $rootScope.loginObj.user.username;

			checklogin.setUser(user);

			var userStat =checklogin.isLoggedIn();


			if (userStat){
				var view = '/home';
				$location.path(view);
			}
		});
	};
}]);
