'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
.controller('ArticledetailCtrl',['$scope', '$location', '$firebase', '$rootScope', function ($scope, $location, $firebase, $rootScope) {
	// chcek the login status
	if (!$rootScope.loginObj.user){
		console.log('not loggedin');
		var viewA = '/login';
		$location.path(viewA);
	}

	var url = 'https://mddproj.firebaseio.com' + $location.$$path;
	console.log(url);
	// $scope.items = $firebase( new Firebase(url));
	$scope.items = $firebase(new Firebase(url));

}]);


