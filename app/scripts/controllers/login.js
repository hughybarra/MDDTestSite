'use strict';

angular.module('mddtestSiteApp')
.controller('LoginCtrl', ['$scope', '$rootScope','$location',function ($scope, $rootScope, $location) {
	//clicks
	$scope.attemptLogin = function(){
		$rootScope.loginObj.$login('facebook');
		var view = '';
		if (!$rootScope.loginObj.user){
			console.log('not loggedin');

			view = '/login';
			$location.path(view);

		}else{
			console.log('logged in');
			view = '/home';
			$location.path(view);
		}
	};
}]);
