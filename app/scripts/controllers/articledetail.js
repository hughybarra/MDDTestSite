'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
.controller('ArticledetailCtrl',['$scope', '$location', '$firebase', 'checklogin',  function ($scope, $location, $firebase, checklogin) {
	checklogin.isLoggedIn();
	var url = 'https://mddproj.firebaseio.com' + $location.$$path;
	// $scope.items = $firebase( new Firebase(url));
	$scope.items = $firebase(new Firebase(url));

}]);


